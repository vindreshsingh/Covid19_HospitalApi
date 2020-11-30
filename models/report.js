// import mongoose odm module
const mongoose = require('mongoose');

// creating the report schema
const reportSchema = new mongoose.Schema(
  { // doctor details
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    // status of patient
    status: {
      type: String,
      required: true,
    },
    // patient details
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
    // date of creating report
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
// creating model from schema
const Report = mongoose.model('Report', reportSchema);

// export the model
module.exports = Report;
