var db=require('./models/index.js');

db.User.create({username: 'john', password: 'test'});
