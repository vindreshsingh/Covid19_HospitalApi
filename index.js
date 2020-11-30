// import express
const express = require('express');

// start the express server
const app = express();

// setting port
const port = 8000;

// import mongodb  configuration
const db = require('./config/mongoose');

// import passport to authenticate user and requests
const passport = require('passport');

// import passport jwt strategy
const passportJWT = require('./config/passport-jwt-strategy');

// to parse form data
app.use(express.urlencoded({ extended: true }));

// initialize passport t
app.use(passport.initialize());

// including routes
app.use('/', require('./routes'));

// listen on the port
app.listen(port, function (err) {
  if (err) {
    console.log('error:', err);
    console.log(`Error in running the server:${err}`);
  }

  console.log(`Server is running on port:${port}`);
});
