// All necessary requires, such as the Quote model.
const mongoose = require('mongoose');
User = mongoose.model('User');
module.exports = {
  allUsers: (req, res) => {
    console.log('allUsers triggered');
    User.find({}, (err, data) => {
      if (err) {
        console.log('Error! ', err)
      } else {
        res.json({
          users: data,
        });
      }
    });
  },

  newUser: (req, res) => {
    console.log('newUser triggered');
    var user = new User({ name: req.params.name })
    user.save(err => {
      if (err) {
        console.log('Error with adding new user, ', err)
      }
    })
    res.redirect('/')
  },

  deleteUser: (req, res) => {
    console.log('deleteUser triggered');
    User.remove({name: req.params.name}, (err, data) => {
      if (err) {
        console.log('Error! ', err)
      } 
    })
    res.redirect('/')
  },
  
  getUser: (req, res) => {
    console.log('getUser triggered');
    User.find({name: req.params.name}, (err, data) => {
      if (err) {
        console.log('Error! ', err)
      } else {
        res.json({
          users : data
        });
      }
    })
  }
};
