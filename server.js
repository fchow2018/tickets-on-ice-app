var express=require('express');
var app=express();
var db=require('./models/index.js');
var bodyParser = require('body-parser');
var OAuth2Strategy = require('passport-oauth2'),
    LocalStrategy = require('passport-local').Strategy,
    cookieParser = require('cookie-parser'),
    TMAPI = require('tm-api')
var passport = require('passport');
var session = require('express-session');
TMAPI.setAPIKey("l9XiABE2P5GIQGAhtFcErCCFoA2Ap9R4");
TMAPI.setSecret("bzE5ahSftAgfRSMe");

var promise = TMAPI.events.search("NHL");

var ssn, cookies;
var User = db.User;
var Ticket = db.Ticket;
var Price = db.Price;

// session
app.use(session({
  secret: 'ticket_bought', // secret password
  resave: false,
  saveUninitialized: false
}));

// cookie bodyParser
app.use(cookieParser());

// passport config
app.use(passport.initialize());
app.use(passport.session());

  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

// Configure app
app.set('views', __dirname + '/views');      // Views directory
app.use(express.static('public'));          // Static directory
app.use(bodyParser.urlencoded({ extended: true })); // req.body

app.set("view engine", "ejs");

// Set CORS Headers
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//basic root route
app.get('/',function(req,res){
  // if conencted
  if(req.user){
    res.redirect('/home')
  }else{

res.render('signup_login.ejs');
}
});

// app.get('/',function(req,res){
//     res.render('splash.ejs');
//
// });

app.get('/signup', function(req,res){
  res.render('signup');
});

app.get('/signup_login', function(req,res){
  res.render('signup_login');
})

app.post('/signup',function(req,res){
  // ragex for email verification
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  // email verified
  if( !emailRegex.test(req.body.username)){;
    res.status(400).json({message:'Not a valid email address!'});
}
  User.register(new User({username:req.body.username,first_name:req.body.first_name,last_name:req.body.last_name})
  ,req.body.password,function(err,newUser){
    if(err){
      res.status(400).json({'message':err});
      throw err;
    }else{
    passport.authenticate('local')(req, res, function(err1,ok) {
    if(err1){
  res.status(400).json({'message':err1.message});
}
  else{
    res.redirect('/home');
  }
});
}})});
// app.get('/home',function(req,res){
//
//   if(req.user){
//   res.render("home", {user:req.user,ssn:ssn });
//
// }else{
//   res.redirect('/');
//
// }
// });

app.post('/login', passport.authenticate('local'),function (req,res) {

  res.redirect('/users/' + req.user.username);
})
//
app.listen(process.env.PORT || 3000,function(){
  console.log('server running');
});
