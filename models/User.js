var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

UserSchema = new Schema({
first_name:{type:String,required: true },
last_name:{type:String,required: true },
username:String,
password:String,
token:String,
type_connection:Number
});
UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);
module.exports = User;
