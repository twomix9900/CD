const mongoose = require('mongoose');
Race = mongoose.model('Race');
User = mongoose.model('User');
Group = mongoose.model('Group');

module.exports = {
  initRace: (req, res) => {
    console.log('initRace invoked', req.body);
    Race.create({ winner: req.body.winner, course: req.body.course, platform: req.body.platform }, (err, race) => {
      if (err) {
        console.log('error creating race', err);
        res.json({ error: err });
      } else {
        res.json({ race: race });
      }
    });
  },

  getRaces: (req, res) => {
    console.log('getRaces invoked');
    Race.find({}, (err, data) => {
      if (err) {
        console.log("Error with getRaces", err);
        res.json({ error: err });
      } else {
        res.json({ races: data });
      };
    });
  },

  addUserToRace: (req, res) => {
    console.log('addUserToRace invoked', req.params.userId, req.params.raceId);
    User.find({ _id: req.params.userId }, (err, user) => {
      console.log('user = ', user)
      console.log('screename = ', user[0]['screenName']);
      if (err) {
        console.log("error finding user", err);
        res.json({ error: err });
      } else {
        Race.findOneAndUpdate({ _id: req.params.raceId }, { $push: { users: user[0]['screenName'] } }, (err, race) => {
          if (err) {
            console.log("Error updating movie", err);
            res.json({ error: err });
          } else {
            res.json({ race: race })
          }});
        }
    });
  },

  addRaceToUser: (req, res) => {
    console.log('addRaceToUser invoked', req.params.userSN, req.params.raceId);
    Race.find({ _id: req.params.raceId }, (err, race) => {
      console.log(race);
      if (err) {
        console.log("error finding user", err);
        res.json({ error: err });
      } else {
        User.findOneAndUpdate({ screenName: req.params.userSN }, { $push: { races: race[0] } }, (err, user) => {
          if (err) {
            console.log("Error updating movie", err);
            res.json({ error: err });
          } else {
            res.json({ user: user })
          }});
        }
    });
  },

  addGroupToRace: (req, res) => {
    console.log('addGroupToRace invoked', req.params.groupId, req.params.raceId);
    Group.find({ _id: req.params.groupId }, (err, group) => {
      if (err) {
        console.log('error finding group', err);
        res.json({ error: err });
      } else {
        Race.findById(req.params.raceId, (err, race) => {
          if (err) {
            console.log('error finding race', err);
            res.json({ error: err });
          } else {
            race.group = group;
            race.save((err, updatedRace) => {
              if (err) {
                console.log("error updating race", err);
                res.json({ error: err });
              } else {
                res.json({ race: updatedRace });
              }
            });
          }
        });
      }
    });
  },

  deleteRace: (req, res) => {
    console.log('deleteRace invoked');
    Race.remove({ _id: req.params.id }, (err, race) => {
      if (err) {
        console.log('error deleting race', err);
        res.json({ error: err });
      } else {
        res.json({ race: race });
      }
    });
  },







};
