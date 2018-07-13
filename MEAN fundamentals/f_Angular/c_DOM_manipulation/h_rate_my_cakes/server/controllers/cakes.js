const mongoose = require('mongoose');
Cake = mongoose.model('Cake');
Review = mongoose.model('Review');

module.exports = {
  index: (req, res) => {
    console.log('/ invoked?')
    res.redirect('/cakes');
  },

  getCakes: (req, res) => {
    console.log('index invoked');
    Cake.find({}, (err, data) => {
      if (err) {
        console.log("Error with retrieving all cakes", err);
      } else {
        res.json({
          cakes: data,
        })
      }
    })
  },

  addCake: (req, res) => {
    console.log('addCake invoked');
    let cake = new Cake({ image: req.body.image, baker: req.body.baker });
    cake.save((err, data) => {
      if (err) {
        console.log("Error with adding new cake ", err);
      } else {
        console.log("Cake added");
        res.json({
          data: data,
        })
      }
    })
  },

  addReview: (req, res) => {
    console.log('addReview invoked');
    Review.create(req.body, (err, data) => {
      if (err) {
        console.log("Error adding review", err)
      } else {
        Cake.findOneAndUpdate({
          _id: req.params.id
        }, {
          $push: {
            reviews: data,
          }
        }, function (err, data) {
          console.log("Error adding review", err)
        });
        res.json({
          data: data,
        })
      }
    })
  },



};
  // index: (req, res) => {
  //   res.redirect('/cakes')
  // },

  // allTasks: (req, res) => {
  //   console.log('allTasks triggered');
  //   Cakes.find({}, (err, data) => {
  //     if (err) {
  //       console.log('Error! ', err)
  //     } else {
  //       res.json({
  //         tasks: data,
  //       });
  //     }
  //   });
  // },

  // newTask: (req, res) => {
  //   console.log('newTask triggered');
  //   var cake = new Cakes({ title: req.body.title, description: req.body.description, completed: req.body.completed })
  //   cake.save((err) => {
  //     if (err) {
  //       console.log('Error with adding new cake, ', err)
  //     } else {
  //       console.log('cake added');
  //       res.json({
  //         data: cake
  //       })
  //     }
  //   })
  // },

  // deleteTask: (req, res) => {
  //   console.log('deleteTask triggered');
  //   Cakes.remove({_id: req.params.id}, (err, data) => {
  //     if (err) {
  //       console.log('Error! ', err)
  //     } else {
  //       res.json({
  //         data: data
  //       })
  //     }
  //   })
  // },
  
  // getTask: (req, res) => {
  //   console.log('getTask triggered');
  //   Cakes.find({_id: req.params.id}, (err, data) => {
  //     if (err) {
  //       console.log('Error! ', err)
  //     } else {
  //       res.json({
  //         tasks : data
  //       });
  //     }
  //   })
  // },

  // updateTask: (req, res) => {
  //   Cakes.findById(req.params.id, (err, cake) => {
  //     if (err) return handleError(err);
  //     console.log('cake in update query = ', cake)
  //     cake.title = req.body.title;
  //     cake.description = req.body.description;
  //     cake.completed = req.body.completed;
  //     cake.save((err, updatedTask)=> {
  //       if (err) return handleError(err);
  //       res.json({data: updatedTask})
  //     })
  //   })
  // },

