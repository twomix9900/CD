// All necessary requires, such as the Quote model.
const mongoose = require('mongoose');
Quote = mongoose.model('Quote');
module.exports = {
  index: function(req, res) {
    res.render("index", {});
  },
  
  create: function(req, res) {
    var quote = new Quote({
      name: req.body.name,
      quote: req.body.quote
    })
    quote.save(function (err) {
      if (err) {
        console.log("Error with saving to DB", err)
        res.redirect('/')
      } else {
        console.log("Successfully added quote!", quote)
        res.redirect('/quotes')
      }
    })
  },

  getAllQuotes: function(req, res) {
    Quote.find({}, function (err, data) {
      if (err) {
        console.log('Error! ', err)
        res.redirect('/')
      } else {
        console.log('Success!', data)
        res.render("quotes", {
          quotes: data,
        });
      }
    })
  }
};
