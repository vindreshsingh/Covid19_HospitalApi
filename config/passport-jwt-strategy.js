// import passport module to create jwt strategy
const passport = require('passport');

// create passport-jwt strategy
const JWTStrategy = require('passport-jwt').Strategy;

// create jwt token extractor
const ExtractJWT = require('passport-jwt').ExtractJwt;

// import doctor model
const Doctor = require('../models/doctor');

// setting passport jwt strategy options like extracting from auth bearer token and secret key.
let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'covid19',
};

// authenticating using passport-jwt by taking token from auth header 
// and then looking for doctor in db if found authorize that request else reject
passport.use(
  new JWTStrategy(opts, function (jwtPayload, done) {
    Doctor.findById(jwtPayload._id, function (err, doctor) {
      if (err) {
        console.log('Error in finding doctor from JWT');
        return;
      }
      if (doctor) {
        return done(null,doctor);
      } else {
        return done(null, false);
      }
    });
  }),
);

// export the passport
module.exports = passport;
