var mongoose = require('mongoose');
var Schema = mongoose.Schema;

TicketsSchema = new Schema({
  user_id:{ type: Schema.Types.ObjectId, ref: 'User' },
  game_title:String,
  date:String,
  start_time:Number,
  stadium_name:String,
  stadium_location:String,
  section:Number,
  row:Number,
  seat:Number
});

var Tickets = mongoose.model("Tickets", TicketsSchema);
module.exports = Tickets;
