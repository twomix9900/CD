var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
const server = app.listen(8000, function () { console.log("listening on port 8000") });
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
 }, { timestamps: true })
 mongoose.model('Quote', QuoteSchema); 
 var Quote = mongoose.model('Quote')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render("index", {});
})

app.post('/addQuote', function (req, res) {
  var quote = new Quote({ name: req.body.name, quote: req.body.quote })
  quote.save(function(err) {
    if (err) {
      console.log("Error with saving to DB", err)
      res.redirect('/')
    } else {
      console.log("Successfully added quote!", quote)
      res.redirect('/quotes')
    }
  })
})

app.get('/quotes', function (req, res) {
  Quote.find({}, function(err, data) {
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
})