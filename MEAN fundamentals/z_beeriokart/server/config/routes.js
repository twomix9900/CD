const user = require('../controllers/users.js');
const group = require('../controllers/groups.js');
const race = require('../controllers/races.js');
const path = require('path');

module.exports = (app) => {
  app.get('/users', (req, res) => {
    user.getUsers(req, res);
  });  

  app.post('/registeruser', (req, res) => {
    user.registerUser(req, res);
  });

  app.post('/loginuser', (req, res) => {
    user.loginUser(req, res);
  });

  app.delete('/user/:id', (req, res) => {
    user.deleteUser(req, res);
  });

  app.post('/race/:userid', (req, res) => {
    race.initRace(req, res);
  });

  app.put('/race/:raceid/user/:userid', (req, res) => {
    race.addUserToRace(req, res);
  });

  app.put('/race/:raceid/group/:groupid', (req, res) => {
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

  app.post('/group', (req, res) => {
    group.initGroup(req, res);
  });

  app.put('/group/:groupid/user/:userid', (req, res) => {
    group.addUserToGroup(req, res);
  });

  app.delete('/group/:id', (req, res) => {
    group.deleteGroup(req.res);
  });

  app.all("*", (req,res,next) => { res.sendFile(path.resolve("./public/dist/public/index.html")) });


  // app.post('/movie', (req, res) => {
  //   movie.addMovie(req, res);
  // });

  // app.get('/movie/:id', (req, res) => {
  //   movie.getMovie(req, res);
  // });

  // app.delete('/movie/:id', (req, res) => {
  //   movie.deleteMovie(req, res);
  // });

  // app.put('/movie/:id', (req, res) => {
  //   movie.addReview(req, res);
  // });

  // app.delete('/review/:movieid/:reviewid', (req, res) => {
  //   movie.deleteReview(req, res);
  // });
}