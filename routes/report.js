// this is route report of patient

// import express amd express router
const express = require('express');
const router = express.Router();

// import report conttoller api
const reportApi = require('../controllers/report_api');

// route to getting all report by given status
router.get('/:status', reportApi.filterReports);

// export the router
module.exports = router;
