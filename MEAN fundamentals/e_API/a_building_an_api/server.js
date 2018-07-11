app.use(bodyParser.json());
const bodyParser = require('body-parser');
// configure body-parser to read JSON
app.use(bodyParser.json());
...
app.get('/quotes', function (req, res) {
  Quote.find({}, function (err, quotes) {
    if (err) {
      console.log("Returned error", err);
      // respond with JSON
      res.json({
        message: "Error",
        error: err
      })
    } else {
      // respond with JSON
      res.json({
        message: "Success",
        data: quotes
      })
    }
  })
})