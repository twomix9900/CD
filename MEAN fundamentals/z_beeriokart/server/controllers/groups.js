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
    Group.create({}, (err, group) => {
      if (err) {
        console.log('error creating group', err);
        res.json({ error: err });
      } else {
        console.log('group created', group);
        res.json({ group:group });
      }
    });
  },

  addUserToGroup: (req, res) => {
    console.log('addUserToGroup invoked', req.params.groupId, req.params.screenName);
    User.find({ screenName: req.params.screenName }, (err, user) => {
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

  addGroupToUser: (req,res) => {
    console.log('addGroupToUser invoked', req.params.userSN, req.params.groupId);
    Group.find({ _id: req.params.groupId }, (err, group) => {
      if (err) {
        console.log("error finding user", err);
        res.json({ error: err });
      } else {
        console.log('group = ', group);
        User.findOneAndUpdate({ screenName: req.params.userSN }, { $push: { groups: group } }, (err, user) => {
          if (err) {
            console.log('error updating group', err);
            res.json({ error: err });
          } else {
            res.json({ user: user });
          }
        })
      }
    })
  },

  getGroup: (req, res) => {
    console.log('getGroup invoked', req.params.groupId);
    Group.find({ _id: req.params.groupId }, (err, group) => {
      if (err) {
        console.log('error finding group', err);
        res.json({ error: err });
      } else {
        res.json({ group: group });
      }
    });
  },

  getGroupInfoFromRaces: (req, res) => {
    console.log('getGroupInfoFromRaces invoked', req.params.groupId);
    Race.find({ }, (err, allRaces) => {
      if (err) {
        console.log('error finding races', err);
        res.json({ error: err });
      } else {
        let result = [];

        for (let i = 0; i < allRaces.length; i++) {
          if (allRaces[i]['group'][0]['_id'] == req.params.groupId) {
            console.log('match found!')
            result.push(allRaces[i]);
          }
        }

        res.json({ races: result });
      }
    });
  },

  deleteGroup: (req, res) => {
    console.log('deleteGroup invoked', req.params.userId, req.params.groupId);
    // User.update({ _id: req.params.userId }, { $pull: { groups: { _id: req.params.groupId } } }, (err, user) => {
    //   if (err) {
    //     console.log('error updating user');
    //     res.json({ error: err });
    //   } else {
    //     console.log(user);
    //     res.json({ user: user });
    //   }
    // });
    User.update({_id: String(req.params.userId)}, { $pull: { groups: {_id: String(req.params.groupId)} } }, (err, user) => {
      console.log("u_id", req.params.userId);
      console.log("g_id", req.params.groupId);
      
      if (err) {
        console.log('error deleting group', err);
        res.json({ error: err });
      } else {
        console.log('success deleting group', user);
        res.json({ user: user });
      }
    });
    // User.findByIdAndUpdate(req.params.userId, { $pull: { groups: {_id: req.params.groupId} } }, (err, user) => {
    //   if (err) {
    //     console.log('error deleting group', err);
    //     res.json({ error: err });
    //   } else {
    //     console.log('success deleting group', user);
    //     res.json({ user: user });
    //   }
    // });

    // THE FIRE
    // User.findOne({_id: req.params.userId}, (err,user)=>{
    //   if(err){
    //     console.log("Error when finding user");
    //     res.json(err)
    //   }else{
    //     // const group = user.groups.id(req.params.groupId)
    //     user.groups.pull({_id: req.params.groupId})
    //     user.save(err=>{
    //       if(err){
    //         console.log("Err when saving");
    //         res.json(err)
    //       }else{
    //         res.json({"success":true})
    //       }
    //     })
    //   }
    // })
    // User.update({ screenName: req.params.screenName }, { $pullAll: {_id: [req.params.groupId,"kasfjklawefjlkasjdfas"]}}, ((err, data) => {
    //   if (err) {
    //     res.json(err);
    //   } else {
    //     res.json(data);
    //   }
    // }));
  },





};