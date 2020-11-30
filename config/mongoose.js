// import mongoose odm module
const mongoose = require('mongoose');

// creating connection to running mongoDB server instance
// setting conditions in mogoose constructor to adopt new syntax and avoid deprecation warning
mongoose.connect('mongodb://localhost/hospitalAPI_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// getting the db instance from the mongoose connection
const db = mongoose.connection;

// binding error to console in case of db connection fails.
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

// starting the db connection
db.once('open', function () {
  console.log('Connected to database:: MongoDB');
});

// export the db connection
module.exports = db;
