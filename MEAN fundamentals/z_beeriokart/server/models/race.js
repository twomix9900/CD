const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beeriokart');
const UserSchema = require('./user.js');
const GroupSchema = require('./group.js');

const RaceSchema = new mongoose.Schema({
  users: { type: [UserSchema] },
  course: {
    type: String,
    required: [true, "Course name is required"],
  },
  platform: {
    type: String,
    required: [true, "Platform is required"],
  },
  winner: {
    type: UserSchema,
    require: [true, "Winner for this race is required"],
  },
  group: { type: GroupSchema },
}, { timestamps: true })
mongoose.model('Race', RaceSchema);