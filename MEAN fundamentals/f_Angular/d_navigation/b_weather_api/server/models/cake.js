const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rate_my_cakes');

const ReviewSchema = new mongoose.Schema({
  rating: { type: Number, min: 1, max: 5, required: true },
  review: { type: String, required: true },
 }, { timestamps: true } )
mongoose.model('Review', ReviewSchema); 

const CakeSchema = new mongoose.Schema({
  image: { type: String, required: true },
  baker: { type: String, required: true },
  reviews: [ReviewSchema],
 }, { timestamps: true } )
mongoose.model('Cake', CakeSchema); 