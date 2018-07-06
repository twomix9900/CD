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

io.on('connection', function (socket) { 
  socket.on('initName', function (data) {
    socket.user = data.name;
    io.emit('broadcast_new_user', {
      new_user: data.name,
    })
  })

  socket.on('new_message', function (data) {
    io.emit('append_new_message', {
      message: data.message,
      user: data.user,
    })
  })

  socket.on('disconnect', function (data) {
    io.emit('user_disconnected', {
      message: socket.user + " disconnected."
    })
  })

});


app.get('/', function (req, res) {
  res.render("index", {

  });
})