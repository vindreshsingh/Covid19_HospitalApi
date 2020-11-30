// import doctor model
const Doctor = require('../models/doctor');

// import patient model
const Patient = require('../models/patient');

// import report model
const Report = require('../models/report');

// patient register using  your name and mobile no.
module.exports.register = async (req, res) => {
  try {
    // check if patient is already registered
    let patient = await Patient.findOne({ contact: req.body.contact });

    // if not so 
    // creating new patient
    if (!patient) {
      let createNewPatient = await Patient.create(req.body);

      // sending success message after succeefully register
      return res.status(200).json({
        data: {
          patient: createNewPatient,
        },
        message: 'Registration Successfully completed!',
      });
    } else {

      // sending meggage if patient already register.
      return res.status(200).json({
        data: {
          patient: patient,
        },
        message: 'patient Already registered with us!',
      });
    }
  } catch (error) {
    // sending error message on failed request
    return res.status(500).json({
      message: 'Some Internal Server Error Here',
    });
  }
};

//create patient report by doctor
module.exports.createReport = async (req, res) => {
  try {
    // find autherized doctor
    let doctor = await Doctor.findById(req.user._id);

    // find patient by id 
    let patient = await Patient.findById(req.params.id);

    // check if report status is follow following type of symptoms or not.
    if (
      [
        'Negative',
        'Travelled-Quarantine',
        'Symptoms-Quarantine',
        'Positive-Admit',
      ].includes(req.body.status.toString()) == false
    ) {
      return res.status(422).json({
        message: 'Invalid Symptoms Input',
      });
    }

    // check if both are valid and present then creating report with info passed in request
    // if doctor and patient both are autherize
    if (patient && doctor) {
      // then create report
      let report = await Report.create({
        // doctor info
        doctor: doctor,
        // status of patient
        status: req.body.status,
        // patient info
        patient: patient,
        // date of creating report
        date: Date.now().toString(),
      });

      // add report in patient array object.
      await patient.reports.push(report);
      // save the patient array
      await patient.save();
    }

    // sent success msg after creating report
    return res.status(200).json({
      message: 'Your Report is  created!',
    });
  } catch (error) {
    // if an error so send failed msg
    return res.status(500).json({
      message: 'Some Internal Server Error',
    });
  }
};

// return  all reports present in db from oldest to latest..
// removed sensitive info like password from response result.
module.exports.allReports = async (req, res) => {
  try {
    let reports = await Report.find({ patient: req.params.id })
    // sort by date
      .sort('createdAt')
      // populate by doctor
      .populate('doctor', 'name email')
      // populate by patient
      .populate('patient', 'name contact');

    return res.status(200).json({
      message: 'list of reports',
      reports: reports,
    });
  } catch (error) {
    // send error response on req fail
    return res.json(500, {
      message: 'Internal Server Error',
    });
  }
};
