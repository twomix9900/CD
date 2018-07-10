var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
const server = app.listen(8000, function () { console.log("listening on port 8000") });
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');
var CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A name is required"],
    minlength: [3, "Name must be at least 3 characters"],
  },
  message: {
    type: String,
    required: [true, "A message is required"],
    minlength: [5, "Message must be at least 3 characters"],
  },  
})

var MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A name is required"],
    minlength: [3, "Name must be at least 3 characters"],
  },
  message: {
    type: String,
    required: [true, "A message is required"],
    minlength: [5, "Message must be at least 3 characters"],
  },
  comments: [CommentSchema]
 }, { timestamps: true } )

mongoose.model('Message', MessageSchema); 
mongoose.model('Comment', CommentSchema); 
const Message = mongoose.model('Message')
const Comment = mongoose.model('Comment')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  Message.find({}, function(err, data) {
    if (err) {
      console.log('Error! ', err)
    } else {
      console.log("results from db:", data)
      res.render("index", {
        messages: data,
      });
    }
  })
})

app.post('/add_message', function (req, res) {
  var message = new Message({ name: req.body.name, message: req.body.message })
  message.save(function(err) {
    if (err) {
      console.log('Error with creating new message', err)
    }
  })

  res.redirect("/");
})

app.post('/add_comment/:id', function (req, res) {
  Comment.create(req.body, function (err, data) {
    if (err) {
      console.log("Error adding comment", err)
    } else {
      Message.findOneAndUpdate({
        _id: req.params.id
      }, {
        $push: {
          comments: data
        }
      }, function (err, data) {
        console.log("Error adding comment", err)
      })
    }
  })

  res.redirect("/");
})