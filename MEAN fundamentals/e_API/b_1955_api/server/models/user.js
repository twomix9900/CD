const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955_api');
const UserSchema = new mongoose.Schema({
  name: String,
 }, { timestamps: true })
mongoose.model('User', UserSchema); 