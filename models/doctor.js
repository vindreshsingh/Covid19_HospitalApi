// import mongoose odm module
const mongoose = require('mongoose');

// creating the doctor schema
const doctorSchema = new mongoose.Schema(
  {// doctor name
    name: {
      type: String,
      required: true,
    },
    // doctor email
    email: {
      type: String,
      required: true,
      unique: true,
    },
// password
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
// creating model from schema
const Doctor = mongoose.model('Doctor', doctorSchema);

// export the model
module.exports = Doctor;
