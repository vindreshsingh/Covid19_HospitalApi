// here import doctor model
const Doctor = require('../models/doctor');

// import jwt module for create token
const jwt = require('jsonwebtoken');

// register doctor using name,email and password 
module.exports.register = async (req, res) => {
  try {
    // check doctor is alredy register
    let doctor = await Doctor.findOne({ email: req.body.email });

    // if not present then register doctor
    if (!doctor) {
      let newDoctor = await Doctor.create(req.body);

      // removing private info like password from newly created doctor object
      let newDoctorObj = newDoctor.toObject();
      delete newDoctorObj.password;

      // sending the success response message along with registered doctor info.
      return res.status(200).json({
        data: {
          doctor: newDoctorObj,
        },
        message: 'Doctor Registration Successfully created!',
      });
      
    }
    // if doctor alredy registerred the give msg Alredy registered 
    else {
      let docObj = doctor.toObject();
      delete docObj.password;
      return res.status(200).json({
        data: {
          doctor: docObj,
        },
        message: 'Doctor Already registered',
      });
    }
  
  }
  // any error occur in during registration 
  catch (error) {
    return res.status(500).json({
      message: 'Some Internal Server Error',
    });
  }
};

//login registered doctors using email and password
module.exports.login = async (req, res) => {
  try {
    // check doctor is registred or not
    let doctor = await Doctor.findOne({ email: req.body.email });

    // check if doctor does not exists or invalid credentials and sending appropriate response
    if (!doctor || doctor.password != req.body.password) {
      return res.status(422).json({
        message: 'Invalid username or password',
      });
    }

    // return success response with jwt token created from doctor's info.
    return res.status(200).json({
      message: 'Sign in successful,plese dont share your tocken',
      //create your token here
      data: {
        token: jwt.sign(doctor.toJSON(), 'covid19', { expiresIn: '2300000' }),
      },
    });
  } catch (error) {
    // return error response on request failure
    return res.status(500).json({
      message: 'Some Internal Server Error',
    });
  }
};
