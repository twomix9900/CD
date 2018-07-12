const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ninja_gold');
const GoldSchema = new mongoose.Schema({
  gold: { type: Number },
 }, { timestamps: true } )
mongoose.model('Gold', GoldSchema); 