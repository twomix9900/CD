var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
}, {
  timestamps: true
})
mongoose.model('Quote', QuoteSchema);