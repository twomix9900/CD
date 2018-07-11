var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard');
var DogSchema = new mongoose.Schema({
  name: String,
  age: Number,
 }, { timestamps: true })
mongoose.model('Dog', DogSchema); 