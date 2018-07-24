const mongoose = require('mongoose');
Race = mongoose.model('Race');
User = mongoose.model('User');
Group = mongoose.model('Group');

module.exports = {
  getGroups: (req, res) => {
    console.log('getGroups invoked');
    Group.find({ }, (err, group) => {
      if (err) {
        console.log("error finding groups");
        res.json({ error: err });
      } else {
        res.json({ groups: group });
      }
    });
  }, 

  initGroup: (req, res) => {
    console.log('initGroup invoked', req.params.userId);
    User.find({ _id: req.params.userId }, (err, user) => {
      if (err) {
        console.log("error finding user", err);
        res.json({ error: err });
      } else {
        let group = new Group({ users: [user[0]['screenName']] });
        group.save((err, group) => {
          if (err) {
            console.log('error saving new group', err);
            res.json({ error: err });
          } else {
            user[0]['groups'] = group;
            user[0].save((err, updatedUser) => {
              if (err) {
                console.log('error updating user');
                res.json({ error: err });
              } else {
                res.json({ user: updatedUser });
              }
            });
          }
        });
      }
    });
  },

  addUserToGroup: (req, res) => {
    console.log('addUserToGroup invoked');
    User.find({ _id: req.params.userId }, (err, user) => {
      if (err) {
        console.log("error finding user", err);
        res.json({ error: err });
      } else {
        Group.findOneAndUpdate({ _id: req.params.groupId }, { $push: { users: user[0]['screenName'] } }, (err, group) => {
          if (err) {
            console.log('error updating group', err);
            res.json({ error: err });
          } else {
            res.json({ group: group });
          }
        })
      }
    })
  },

  deleteGroup: (req, res) => {
    console.log('deleteGroup invoked');
    Group.remove({ _id: req.params.id }, (err, group) => {
      if (err) {
        console.log("error deleting group", err);
        res.json({ error: err });
      } else {
        res.json({ group: group });
      }
    });
  },







};