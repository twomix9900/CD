const user = require('../controllers/users.js');
const group = require('../controllers/groups.js');
const race = require('../controllers/races.js');
const path = require('path');

module.exports = (app) => {
  app.get('/users', (req, res) => {
    user.getUsers(req, res);
  });  

  app.get('/screenName/:screenName', (req, res) => {
    user.validateUser(req, res);
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

  app.post('/race/', (req, res) => {
    race.initRace(req, res);
  });

  app.put('/race/:raceId/user/:userId', (req, res) => {
    race.addUserToRace(req, res);
  });

  app.put('/user/:userSN/race/:raceId', (req, res) => {
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

  app.post('/group/', (req, res) => {
    group.initGroup(req, res);
  });

  app.put('/group/:groupId/user/:screenName', (req, res) => {
    group.addUserToGroup(req, res);
  });

  app.put('/user/:userSN/group/:groupId', (req, res) => {
    group.addGroupToUser(req, res);
  });

  app.get('/group/:groupId', (req, res) => {
    group.getGroup(req, res);
  })

  app.get('/group/:groupId/races', (req, res) => {
    group.getGroupInfoFromRaces(req, res);
  })

  app.delete('/user/:userId/group/:groupId', (req, res) => {
    group.deleteGroup(req, res);
  });

  app.all("*", (req,res,next) => { res.sendFile(path.resolve("./public/dist/public/index.html")) });
}