// here import report model
const Report = require('../models/report');

// return filtered report by testing status
module.exports.filterReports = async (req, res) => {
  try {
    // check if report status is follow following type of symptoms or not.
    let status = req.params.status;
    if (
      [
        'Negative',
        'Travelled-Quarantine',
        'Symptoms-Quarantine',
        'Positive-Admit',
      ].includes(status.toString()) == false
    ) {
  

      // sending response message on invalid status
      return res.status(422).json({
        message: 'Invalid Symptoms Input',
      });
    }
    let reports = await Report.find({ status: status })
    // sort the rport based on date
      .sort('-createdAt')
      // populate on doctor
      .populate('doctor', 'name email')
      // populate on patient
      .populate('patient');

    // success response
    return res.status(200).json({
      message: 'list of reports status',
      reports: reports,
    });
  } catch (error) {
    // error response on req. failure.
    return res.status(500).json({
      message: 'Some Internal Server Error',
    });
  }
};
