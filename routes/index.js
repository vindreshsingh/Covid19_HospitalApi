// import express
const express = require('express');

// import express router
const router = express.Router();

// import doctor routes
const doctors = require('./doctor');

// import patient routes
const patients = require('./patient');

// import report routes
const reports = require('./report');

// use doctor routes
router.use('/doctors', doctors);

// use patient route
router.use('/patients', patients);

// use report routes
router.use('/reports', reports);

// export the router
module.exports = router;
