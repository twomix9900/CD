const user = require('../controllers/users.js');
const group = require('../controllers/groups.js');
const race = require('../controllers/races.js');
const path = require('path');

module.exports = (app) => {
  app.get('/users', (req, res) => {
    user.getUsers(req, res);
  });  

  app.post('/registerUser', (req, res) => {
    user.registerUser(req, res);
  });

  app.post('/loginUser', (req, res) => {
    user.loginUser(req, res);
  });

  app.post('/user/:id', (req, res) => {
    user.getUserInfo(req, res);
  });

  app.delete('/user/:id', (req, res) => {
    user.deleteUser(req, res);
  });

  app.post('/race/:userId', (req, res) => {
    race.initRace(req, res);
  });

  app.put('/race/:raceId/user/:userId', (req, res) => {
    race.addUserToRace(req, res);
  });

  app.put('/user/:userId/race/:raceId', (req, res) => {
    race.addRaceToUser(req, res);
  });

  app.put('/race/:raceId/group/:groupId', (req, res) => {
    race.addGroupToRace(req, res);
  });

  app.get('/races', (req, res) => {
    race.getRaces(req, res);
  });

  app.delete('/race/:id', (req, res) => {
    race.deleteRace(req, res);
  });

  app.get('/groups', (req, res) => {
    group.getGroups(req, res);
  });

  app.post('/group/:userId', (req, res) => {
    group.initGroup(req, res);
  });

  app.put('/group/:groupId/user/:userId', (req, res) => {
    group.addUserToGroup(req, res);
  });

  app.delete('/group/:id', (req, res) => {
    group.deleteGroup(req.res);
  });

  app.all("*", (req,res,next) => { res.sendFile(path.resolve("./public/dist/public/index.html")) });
}