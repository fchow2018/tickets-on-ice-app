var mongoose = require('mongoose');
/*add you connection somewhere here*/
// mongoose.connect({promiseLibrary: global.Promise});

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost/tickets-on-ice'; // localhost

/* adding model User to index.js */
module.exports.User = require('./User');
/* adding model Ticket to index.js */
// module.exports.Ticket = require('./Ticket');
