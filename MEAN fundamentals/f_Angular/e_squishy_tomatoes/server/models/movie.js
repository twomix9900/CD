const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/squishy_tomatoes');
// var uniqueValidator = require('mongoose-unique-validator');


const ReviewSchema = new mongoose.Schema({
  name: {
    required: true,
    minlength: 3,
    type: String,
  },
  stars: {
    required: true,
    min: 1,
    max: 5,
    type: Number
  },
  review: {
    required: true,
    type: String,
    minlength: 3
  }
})
mongoose.model('Review', ReviewSchema);

const MovieSchema = new mongoose.Schema({
  title: {
    required: true,
    minlength: 3,
    type: String,
  },
  reviews: {
    type: [ReviewSchema],
    required: true
  },
}, {
  timestamps: true
})
mongoose.model('Movie', MovieSchema);





// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/rate_my_cakes');

// const ReviewSchema = new mongoose.Schema({
//   rating: { type: Number, min: 1, max: 5, required: true },
//   review: { type: String, required: true },
//  }, { timestamps: true } )
// mongoose.model('Review', ReviewSchema); 

// const CakeSchema = new mongoose.Schema({
//   image: { type: String, required: true },
//   baker: { type: String, required: true },
//   reviews: [ReviewSchema],
//  }, { timestamps: true } )
// mongoose.model('Cake', CakeSchema); 