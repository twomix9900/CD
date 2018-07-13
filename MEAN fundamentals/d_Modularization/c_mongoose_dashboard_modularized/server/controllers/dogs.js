const mongoose = require('mongoose');
Dog = mongoose.model('Dog');
module.exports = {
  index: function(req, res) {
    Dog.find({}, function(err, data) {
      if (err) {
        console.log('Error! ', err)
      } else {
        res.render("index", {
          dogs: data,
        });
      }
    });
  },
  
  newDog: function(req, res) {
    res.render("new_dog", {})
  },

  newDogProcess: function(req, res) {
    var dog = new Dog({ name: req.body.name, age: req.body.age })
    dog.save(function(err) {
      if (err) {
        console.log('Error with adding new dog, ', err)
      }
    })
    res.redirect('/')
  },

  dogGetById: function(req, res) {
    Dog.find({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log('Error! ', err)
      } else {
        res.render("dog_id", {
          dogs : data
        });
      }
    })
  },

  dogEditProcess: function(req, res) {
    Dog.findById(req.params.id, function (err, dog) {
      if (err) return handleError(err);
      dog.name = req.body.name;
      dog.age = req.body.age;
      dog.save(function (err, updatedDog) {
        if (err) return handleError(err);
      })
    })
    res.redirect("/");
  },

  dogEditById: function(req, res) {
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
  },

  DeleteById: function(req, res) {
    Dog.remove({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log('Error! ', err)
      } 
    })
    res.redirect('/')
  },

};
