const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beeriokart');
const UserSchema = require('./user.js');

const GroupSchema = new mongoose.Schema({
  users: {
    type: [UserSchema]
  },
}, { timestamps: true } )
mongoose.model('Group', GroupSchema);