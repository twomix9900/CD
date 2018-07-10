var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
const server = app.listen(8000, function () { console.log("listening on port 8000") });
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard');
var DogSchema = new mongoose.Schema({
  name: String,
  age: Number,
 }, { timestamps: true })
mongoose.model('Dog', DogSchema); 
var Dog = mongoose.model('Dog')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  Dog.find({}, function(err, data) {
    if (err) {
      console.log('Error! ', err)
    } else {
      res.render("index", {
        dogs: data,
      });
    }
  })
})

app.get('/dog/new/', function (req, res) {
  res.render("new_dog", {})
})

app.post('/dog/new_process', function (req, res) {
  var dog = new Dog({ name: req.body.name, age: req.body.age })
  dog.save(function(err) {
    if (err) {
      console.log('Error with adding new dog, ', err)
    }
  })
  res.redirect('/')
})

app.get('/dog/:id/', function (req, res) {
  Dog.find({_id: req.params.id}, function(err, data) {
    if (err) {
      console.log('Error! ', err)
    } else {
      res.render("dog_id", {
        dogs : data
      });
    }
  })
})

app.post('/edit_process/:id/', function (req, res) {
  Dog.findById(req.params.id, function (err, dog) {
    if (err) return handleError(err);
    dog.name = req.body.name;
    dog.age = req.body.age;
    dog.save(function (err, updatedDog) {
      if (err) return handleError(err);
    })
  })
  res.redirect("/");
})

app.get('/edit/:id/', function (req, res) {
  Dog.find({_id: req.params.id}, function(err, data) {
    if (err) {
      console.log('Error! ', err)
    } else {
      console.log('dog_id data: ', data)
      res.render("edit_dog", {
        dogs : data
      });
    }
  })
})

app.get('/delete/:id/', function (req, res) {
  Dog.remove({_id: req.params.id}, function(err, data) {
    if (err) {
      console.log('Error! ', err)
    } 
  })
  res.redirect('/')
})