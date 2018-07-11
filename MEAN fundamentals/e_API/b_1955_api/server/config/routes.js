const mongoose = require('mongoose');
User = mongoose.model('User');
const user = require('../controllers/users.js')
module.exports =  app => {
  app.get('/', (req, res) => {
    user.allUsers(req, res);
  });
  
  app.post('/new/:name/', (req, res) => {
    user.newUser(req, res);
  });
  
  app.delete('/remove/:name/', (req, res) => {
    user.deleteUser(req, res);
  });

  app.get('/:name/', (req, res) => {
    user.getUser(req, res);
  });
}