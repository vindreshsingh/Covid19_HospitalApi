// import express
const express = require('express');
// this router for doctor
// here import express router
const router = express.Router();

// including doctor controller api
const doctorApi = require('../controllers/doctor_api');

// route to register doctor
router.post('/register', doctorApi.register);

// route for doctor to login
router.post('/login', doctorApi.login);

// export the router
module.exports = router;
