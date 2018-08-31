const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
Race = mongoose.model('Race');
User = mongoose.model('User');
Group = mongoose.model('Group');

module.exports = {
  getUsers: (req, res) => {
    console.log('getUsers invoked');
    User.find({}, (err, data) => {
      if (err) {
        console.log("Error with getUsers", err);
        res.json({ error: err });
      } else {
        res.json({ users: data });
      };
    });
  },

  getUserInfo: (req, res) => {
    console.log('get user invoked', req.params.id);
    User.find({ _id: req.params.id }, (err, user) => {
      if (err) {
        console.log("Error getting user", err);
        res.json({ error: err });
      } else {
        res.json({ user: user });
      }
    });
  },

  registerUser: (req, res) => {
    console.log('registerUser invoked');
    User.create({ email: req.body.email, screenName: req.body.screenName, password: req.body.password }, (err, user) => {
      if (err) {
        console.log("error creating user", err);
        res.json({ error: err });
      } else {
        console.log("user created", user)
        res.json({ user: user, });
      }
    });
  },

  loginUser: (req, res) => {
    console.log('loginUser invoked', req.body);
      User.findOne( { email: req.body.email } , (err, user) => {
      if (err) {
        console.log('error with finding user', err);
        res.json({ error: err })
      } else if (!user) {
        console.log("Checking screenname", req.body);
        User.findOne( { screenName: req.body.email }, (error, user) => {
          if (error) {
            console.log('error with finding user', error);
            res.json({ error: error })
          } else if (!user) {
            console.log("User not found");
            res.json({ error: "Invalid user credentials" });
          } else {
            console.log("Comparing pw", user)
            user.comparePassword(req.body.password, (err, isMatch)  => {
              if (err) {
                console.log('error checking pw', err);
                res.json({ error: err });
              } else if (isMatch) { 
                res.json({ user: user });
              } else {
                res.json({ error: "Invalid user credentials" });
              }
            });
          }
        } )
      } else {
        console.log('user after', user)
        user.comparePassword(req.body.password, (err, isMatch)  => {
          if (err) {
            console.log('error checking pw', err);
            res.json({ error: err });
          } else if (isMatch) { 
            res.json({ user: user });
          } else {
            res.json({ error: "Invalid user credentials" });
          }
        });
      }
    });
  },

  // loginUser2: (req, res) => {
  //   console.log('loginUser invoked', req.body);
  //     User.findOne( { screenName: req.body.screenName } , (err, user) => {
  //     if (err) {
  //       console.log('error with finding user', err);
  //       res.json({ error: err })
  //     } else if (!user) {
  //       res.json({ error: "Invalid user credentials" })
  //     } else {
  //       console.log('user after', user)
  //       user.comparePassword(req.body.password, (err, isMatch)  => {
  //         if (err) {
  //           console.log('error checking pw', err);
  //           res.json({ error: err });
  //         } else if (isMatch) { 
  //           res.json({ user: user });
  //         } else {
  //           res.json({ error: "Invalid user credentials" });
  //         }
  //       });
  //     }
  //   });
  // },

  deleteUser: (req, res) => {
    console.log('deleteUser invoked');
    User.remove({ _id: req.params.id }, (err, user) => {
      if (err) {
        console.log('error deleting user', err);
        res.json({ error: err });
      } else {
        res.json({ user: user });
      }
    });
  },

  validateUser: (req, res) => {
    console.log('validateUser invoked', req.params.screenName);
    User.find({ screenName: req.params.screenName }, (err, user) => {
      if (err) {
        console.log("Error getting user", err);
        res.json({ error: err });
      } else if (user.length == 0) {
        console.log('user not found');
        res.json({ error: 'user not found' });
      } else {
        res.json({ success: 'user found' });
      }
    });
  },
  




};




