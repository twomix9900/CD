const mongoose = require('mongoose');
Dog = mongoose.model('Dog');
var dog = require('../controllers/dogs.js')
module.exports = function (app) {
  app.get('/', function (req, res) {
    dog.index(req, res);
  })
  
  app.get('/dog/new/', function (req, res) {
    dog.newDog(req, res);
  })
  
  app.post('/dog/new_process', function (req, res) {
    dog.newDogProcess(req, res);
  })
  
  app.get('/dog/:id/', function (req, res) {
    dog.dogGetById(req, res);
  })
  
  app.post('/edit_process/:id/', function (req, res) {
    dog.dogEditProcess(req, res);
  })
  
  app.get('/edit/:id/', function (req, res) {
    dog.dogEditById(req, res);
  })
  
  app.get('/delete/:id/', function (req, res) {
    dog.DeleteById(req, res);
  })
}