// All necessary requires, such as the Quote model.
const mongoose = require('mongoose');
Task = mongoose.model('Task');
module.exports = {
  allTasks: (req, res) => {
    console.log('allTasks triggered');
    Task.find({}, (err, data) => {
      if (err) {
        console.log('Error! ', err)
      } else {
        res.json({
          tasks: data,
        });
      }
    });
  },

  newTask: (req, res) => {
    console.log('newTask triggered');
    var task = new Task({ title: req.body.title, description: req.body.description, completed: req.body.completed })
    task.save(err => {
      if (err) {
        console.log('Error with adding new task, ', err)
      }
    })
    res.redirect('/')
  },

  deleteTask: (req, res) => {
    console.log('deleteTask triggered');
    Task.remove({_id: req.params.id}, (err, data) => {
      if (err) {
        console.log('Error! ', err)
      } 
    })
    res.redirect('/')
  },
  
  getTask: (req, res) => {
    console.log('getTask triggered');
    Task.find({_id: req.params.id}, (err, data) => {
      if (err) {
        console.log('Error! ', err)
      } else {
        res.json({
          tasks : data
        });
      }
    })
  },

  updateTask: (req, res) => {
    console.log('updateTask triggered');
    Task.findById(req.params.id, (err, task) => {
      if (err) return handleError(err);
      task.title = req.body.title;
      task.description = req.body.description;
      task.completed = req.body.completed;
      task.save((err, updatedTask)=> {
        if (err) return handleError(err);
      })
    })
    res.redirect('/');
  },


};
