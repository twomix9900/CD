const mongoose = require('mongoose');
Quote = mongoose.model('Quote');
var quote = require('../controllers/quotes.js')
module.exports = function (app) {
  app.get('/', function (req, res) {
    quote.index(req, res);
  })

  app.post('/addQuote', function (req, res) {
    quote.create(req, res);
  })

  app.get('/quotes', function (req, res) {
    quote.getAllQuotes(req, res);
  })
}