const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product_manager');
var uniqueValidator = require('mongoose-unique-validator');

const ProductSchema = new mongoose.Schema({
  title: { type: String, minlength: 4, required: true, unique: true },
  image: { type: String },
  price: { type: Number, min: 3, required: true },
 }, { timestamps: true } )
ProductSchema.plugin(uniqueValidator, { message: 'This {PATH} is already in use' });

mongoose.model('Product', ProductSchema); 