const mongoose = require('mongoose');
Product = mongoose.model('Product');

module.exports = {
  getProducts: (req, res) => {
    console.log('getProducts invoked');
    Product.find({}, (err, data) => {
      if (err) {
        console.log("Error with getProducts", err);
        res.json({
          error: err,
        });
      } else {
        res.json({
          products: data,
        });
      };
    });
  },

  addProduct: (req, res) => {
    console.log('addProduct invoked');
    let product = new Product({ title: req.body.title, image: req.body.image, price: req.body.price });
    product.save((err, data) => {
      if (err) {
        console.log("Error with adding new product ", err);
        res.json({
          error: err,
        });
      } else {
        console.log("Product added");
        res.json({
          product: data,
        });
      };
    });
  },

  editProduct: (req, res) => {
    console.log("editProduct invoked");
    Product.findById(req.params.id, (err, product) => {
      if (err) {
        console.log("error with finding product", err);
        res.json({
          error: err,
        });
      } else {
        product.title = req.body.title;
        product.image = req.body.image;
        product.price = req.body.price;
        product.save((err, updatedProduct) => {
          if (err) {
            console.log('error with updating product', err);
            res.json({
              error: err,
            });
          } else {
            res.json({
              product: updatedProduct,
            });
          };
        });
      };
    });
  },

  deleteProduct: (req, res) => {
    console.log('deleteProduct invoked');
    Product.remove({
      _id: req.params.id
    }, (err, data) => {
      if (err) {
        console.log('error deleting product', err);
        res.json({
          error: err,
        });
      } else {
        res.json({
          product: data,
        });
      };
    });
  },

  getProduct: (req, res) => {
    console.log('getProduct triggered');
    Product.find({_id: req.params.id}, (err, data) => {
      if (err) {
        console.log('Error! ', err)
      } else {
        res.json({
          product : data,
        });
      };
    });
  },



}


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

