const mongoose = require('mongoose');
Task = mongoose.model('Task');
const task = require('../controllers/tasks.js')
module.exports =  app => {
  app.get('/', (req, res) => {
    task.index(req, res);
  });

  app.get('/tasks/', (req, res) => {
    task.allTasks(req, res);
  });
  
  app.post('/new/', (req, res) => {
    task.newTask(req, res);
  });
  
  app.delete('/remove/:id/', (req, res) => {
    task.deleteTask(req, res);
  });

  app.get('/get/:id/', (req, res) => {
    task.getTask(req, res);
  });

  app.put('/update/:id/', (req, res) => {
    task.updateTask(req, res);
  })
}