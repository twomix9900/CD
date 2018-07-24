const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beeriokart');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const RaceSchema = require('./race.js');
const GroupSchema = require('./group.js');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "An email is required"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Enter a valid email address'],
    unique: true,
  },
  screenName: {
    type: String,
    required: [true, "Screen name is required"],
    minlength: [3, "Screen name must be at least 3 characters long"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password name must be at least 6 characters long"]
  },
  races: { type: [RaceSchema] },
  groups: { type: [GroupSchema] },
},{ timestamps: true });

UserSchema.plugin(uniqueValidator, { message: 'This {PATH} is already in use' });
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

mongoose.model('User', UserSchema); 