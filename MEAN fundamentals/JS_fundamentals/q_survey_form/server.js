var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
  secret: 'somesupertopsecretstuff1234',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000
  }
}))
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render("index", {

  });
})

app.post('/result', function (req, res) {
  console.log("POST DATA", req.body);
  console.log(req.body.name)
  res.render("result", {
    form: req.body
  });
})

app.listen(8000, function () {
  console.log("listening on port 8000");
});