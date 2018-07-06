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

var color = 'yellow';

io.on('connection', function (socket) { 
  io.emit('initColor', { color: color })

  socket.on('green', function (data) {
    console.log('green')
    color = data.color;
    io.emit('updated_color', {
      color: color,
    })
  })

  socket.on('blue', function (data) {
    console.log('blue')
    color = data.color;
    io.emit('updated_color', {
      color: color,
    })
  })

  socket.on('pink', function (data) {
    console.log('pink')
    color = data.color;
    io.emit('updated_color', {
      color: color,
    })
  })
});

app.get('/', function (req, res) {
  res.render("index", {

  });
})