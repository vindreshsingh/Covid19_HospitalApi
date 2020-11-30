// this routes only for patient

// here import express
const express = require('express');

// import express router
const router = express.Router();

// import passport for adding  authentication middleware
const passport = require('passport');

// import patient controller api
const patientApi = require('../controllers/patient_api');

// route to register patient by jwt
router.post(
  '/register',
  passport.authenticate('jwt', { session: false }),
  patientApi.register,
);

// route to creating patient's testing report by jwt
router.post(
  '/:id/create_report',
  passport.authenticate('jwt', { session: false }),
  patientApi.createReport,
);

// route to getting all reports of registerd patients.
router.get('/:id/all_reports', patientApi.allReports);

// export the router
module.exports = router;
