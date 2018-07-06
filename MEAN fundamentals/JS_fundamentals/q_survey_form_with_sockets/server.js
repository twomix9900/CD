var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
const server = app.listen(8000, function () { console.log("listening on port 8000") });
const io = require('socket.io')(server);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({ secret: 'somesupertopsecretstuff1234', resave: false, saveUninitialized: true, cookie: { maxAge: 60000 }}))
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


var temp;

io.on('connection', function (socket) { 
  socket.on('posting_form', function (data) {
    console.log(data.form);
    temp = data.form;

    socket.emit('updated_message', {
      msg: temp
    })

    socket.emit('random_number', {
      number: Math.floor(Math.random() * 1000),
    })
  })
});

app.get('/', function (req, res) {
  res.render("index", {

  });
})