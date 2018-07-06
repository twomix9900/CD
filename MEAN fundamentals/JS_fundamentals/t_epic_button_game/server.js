var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
const server = app.listen(8000, function () { console.log("listening on port 8000") });
const io = require('socket.io')(server);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


var counter = 0;
io.on('connection', function (socket) { 
  socket.on('epic', function (data) {
    counter++;
    console.log('epic')
    io.emit('updated_counter', {
      counter: counter,
    })
  })

  socket.on('reset', function (data) {
    counter = 0;
    console.log('reset')
    io.emit('updated_counter', {
      counter: counter,
    })
  })
});

app.get('/', function (req, res) {
  res.render("index", {

  });
})