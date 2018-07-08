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


var blocks = {
  "sample1": "red",
  "sample2": "red",
  "sample3": "red",
  "sample4": "red",
  "sample5": "red",
  "sample6": "red",
  "sample7": "red",
  "sample8": "red",
}

io.on('connection', function (socket) { 
  io.emit('init_color', blocks)

  socket.on('block_click', function (data) {

    blocks[data.id] = data.color
    socket.broadcast.emit('block_update', blocks)
  })
});


app.get('/', function (req, res) {
  res.render("index", {

  });
})
