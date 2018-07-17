const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors');

const AuthorSchema = new mongoose.Schema({
  name: { type: String, min: 3, required: true },
 }, { timestamps: true } )
mongoose.model('Author', AuthorSchema); 