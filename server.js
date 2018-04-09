var express=require('express');
var app=express();
var db=require('./models/index.js');
var bodyParser = require('body-parser');

// Configure app
app.set('views', __dirname + '/views');      // Views directory
app.use(express.static('public'));          // Static directory
app.use(bodyParser.urlencoded({ extended: true })); // req.body

// Set CORS Headers
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//basic root route
app.get('/',function(req,res){
  console.log('do you stuff here')
  });



app.listen(process.env.PORT || 3000,function(){
  console.log('server running');
});
