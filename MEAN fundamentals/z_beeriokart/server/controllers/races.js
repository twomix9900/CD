const mongoose = require('mongoose');
Race = mongoose.model('Race');
User = mongoose.model('User');
Group = mongoose.model('Group');

module.exports = {
  initRace: (req, res) => {
    console.log('createRace invoked');
    User.find({ _id: req.params.userid }, (err, user) => {
      if (err) {
        console.log("error finding user", err);
        res.json({ error: err });
      } else {
        Race.create({ course: req.body.course, platform: req.body.platform, winner: user[0] }, (err, race) => {
          if (err) {
            console.log("error creating race", err);
            res.json({ error: err });
          } else {
            res.json({ race: race });
          }
        });
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
    console.log('addUsers invoked');
    User.find({ _id: req.params.userid }, (err, user) => {
      if (err) {
        console.log("error finding user", err);
        res.json({ error: err });
      } else {
        Race.findOneAndUpdate({ _id: req.params.raceid }, { $push: { users: user } }, (err, race) => {
          if (err) {
            console.log("Error updating movie", err);
            res.json({ error: err });
          } else {
            res.json({ race: race })
          }});
        }
    });
  },

  addGroupToRace: (req, res) => {
    console.log('addGroupToRace invoked');
    Group.find({ _id: req.body.groupid }, (err, group) => {
      if (err) {
        console.log('error finding group', err);
        res.json({ error: err });
      } else {
        Race.findById(req.params.raceid, (err, race) => {
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

// addMovie: (req, res) => {
//   console.log('addMovie invoked');
//   Review.create({ name: req.body.name, stars: req.body.stars, review: req.body.review }, (err, review) => {
//     if (err) {
//       console.log("error creating review', err");
//       res.json({ error: err });
//     } else {
//       Movie.create({ title: req.body.title, reviews: [review] }, (err, movie) => {
//         if (err) {
//           console.log("error creating movie", err);
//           res.json({ error: err });
//         } else {
//           res.json({ movie: movie })
//         }
//       })
//     }
//   });
// },

// getMovies: (req, res) => {
  //   console.log('getMovies invoked');
  //   Movie.find({}, (err, data) => {
  //     if (err) {
  //       console.log("Error with getMovies", err);
  //       res.json({
  //         error: err,
  //       });
  //     } else {
  //       res.json({
  //         movies: data,
  //       });
  //     };
  //   });
  // },


  // addReview: (req, res) => {
  //   console.log("addReview invoked");
  //   Review.create({ name: req.body.name, stars: req.body.stars, review: req.body.review }, (err, review) => {
  //     if (err) {
  //       console.log("error creating review", err);
  //       res.json({ error: err });
  //     } else {
  //       Movie.findOneAndUpdate({
  //         _id: req.params.id
  //       }, {
  //         $push: {
  //           reviews: review
  //         }
  //       }, (err, movie) => {
  //         if (err) {
  //           console.log("Error updating movie", err);
  //           res.json({ error: err });
  //         } else {
  //           console.log("Review added");
  //           res.json({ movie: movie })
  //         }
  //       });
  //     }
  //   });
  // },

  // deleteMovie: (req, res) => {
  //   console.log('deleteMovie invoked');
  //   Movie.remove({
  //     _id: req.params.id
  //   }, (err, data) => {
  //     if (err) {
  //       console.log('error deleting movie', err);
  //       res.json({
  //         error: err,
  //       });
  //     } else {
  //       res.json({
  //         movie: data,
  //       });
  //     };
  //   });
  // },

  // deleteReview: (req, res) => {
  //   console.log('deleteReview invoked');
  //   Movie.findByIdAndUpdate(req.params.movieid, { $pull: { reviews: {_id: req.params.reviewid} } }, (err, doc) => {
  //     if (err) {
  //       console.log('error', err);
  //       res.json({ error: err });
  //     } else {
  //       res.json({ doc })
  //     }
  //   })

  // },

  // getMovie: (req, res) => {
  //   console.log('getMovie triggered');
  //   Movie.find({_id: req.params.id}, (err, data) => {
  //     if (err) {
  //       console.log('Error! ', err)
  //     } else {
  //       res.json({
  //         movie : data,
  //       });
  //     };
  //   });
  // },






// module.exports = {
//   index: (req, res) => {
//     console.log('index invoked')
//     res.json({})
//   },

//   getCakes: (req, res) => {
//     console.log('getCakes invoked');
//     Cake.find({}, (err, data) => {
//       if (err) {
//         console.log("Error with retrieving all cakes", err);
//       } else {
//         res.json({
//           cakes: data,
//         })
//       }
//     })
//   },

//   addCake: (req, res) => {
//     console.log('addCake invoked');
//     let cake = new Cake({ image: req.body.image, baker: req.body.baker });
//     cake.save((err, data) => {
//       if (err) {
//         console.log("Error with adding new cake ", err);
//       } else {
//         console.log("Cake added");
//         res.json({
//           data: data,
//         })
//       }
//     })
//   },

//   addReview: (req, res) => {
//     Review.create({ rating: req.body.rating, review: req.body.review }, (err, data) => {
//       if (err) {
//         console.log("Error creating review", err)
//       } else {
//         Cake.findOneAndUpdate({
//           _id: req.params.id
//         }, {
//           $push: {
//             reviews: data,
//           }
//         }, function (err, data) {
//           if (err) {
//             console.log("Error adding to cake", err)
//           } 
//         });
//         res.json({
//           data: data,
//         })
//       }
//     })
//   },



// };





// getAuthors: (req, res) => {
//   console.log('getAuthors invoked');
//   Author.find({}, (err, data) => {
//     if (err) {
//       console.log("Error with retrieving all cakes", err);
//       res.json({
//         error: err,
//       })
//     } else {
//       res.json({
//         authors: data,
//       })
//     }
//   })
// },

// index: (req, res) => {
//   console.log('index invoked')
//   res.json({})
// },

// addAuthor: (req, res) => {
//   console.log('addAuthor invoked');
//   let author = new Author({ name: req.body.name });
//   author.save((err, data) => {
//     if (err) {
//       console.log("Error with adding new author ", err);
//       res.json({
//         error: err,
//       });
//     } else {
//       console.log("Author added");
//       res.json({
//         data: data,
//       });
//     }
//   })
// },

// editAuthor: (req, res) => {
//   console.log("editAuthor invoked");
//   Author.findById(req.params.id, (err, author) => {
//     if (err) {
//       console.log("error with finding author", err);
//       res.json({
//         error: err
//       });
//     } else {
//      author.name = req.body.name;
//      author.save((err, updatedAuthor) => {
//        if (err) {
//          console.log('error with updating author', err);
//          res.jso({
//            error: err
//          });
//        } else {
//          res.json({
//            data: updatedAuthor
//          });
//        }
//      }) 
//     }
//   })
// },

// deleteAuthor: (req, res) => {
//   console.log('deleteAuthor invoked');
//   Author.remove({_id: req.params.id}, (err, data) => {
//     if (err) {
//       console.log('error deleting author', err);
//       res.json({
//         error: err
//       });
//     } else {
//       res.json({
//         data: data
//       });
//     }
//   })
// },

// getAuthor: (req, res) => {
//   console.log('getAuthor triggered');
//   Author.find({_id: req.params.id}, (err, data) => {
//     if (err) {
//       console.log('Error! ', err)
//     } else {
//       res.json({
//         author : data
//       });
//     }
//   })
// },


// getCakes: (req, res) => {
//   console.log('getCakes invoked');
//   Cake.find({}, (err, data) => {
//     if (err) {
//       console.log("Error with retrieving all cakes", err);
//     } else {
//       res.json({
//         cakes: data,
//       })
//     }
//   })
// },

// addCake: (req, res) => {
//   console.log('addCake invoked');
//   let cake = new Cake({ image: req.body.image, baker: req.body.baker });
//   cake.save((err, data) => {
//     if (err) {
//       console.log("Error with adding new cake ", err);
//     } else {
//       console.log("Cake added");
//       res.json({
//         data: data,
//       })
//     }
//   })
// },

// addReview: (req, res) => {
//   Review.create({ rating: req.body.rating, review: req.body.review }, (err, data) => {
//     if (err) {
//       console.log("Error creating review", err)
//     } else {
//       Cake.findOneAndUpdate({
//         _id: req.params.id
//       }, {
//         $push: {
//           reviews: data,
//         }
//       }, function (err, data) {
//         if (err) {
//           console.log("Error adding to cake", err)
//         } 
//       });
//       res.json({
//         data: data,
//       })
//     }
//   })
// },

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

