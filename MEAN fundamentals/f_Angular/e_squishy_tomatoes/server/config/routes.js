const movie = require('../controllers/movies.js');

module.exports = (app) => {
  app.get('/all-movies', (req, res) => {
    movie.getMovies(req, res);
  });  

  app.post('/movie', (req, res) => {
    movie.addMovie(req, res);
  });

  app.get('/movie/:id', (req, res) => {
    movie.getMovie(req, res);
  });

  app.delete('/movie/:id', (req, res) => {
    movie.deleteMovie(req, res);
  });

  app.put('/movie/:id', (req, res) => {
    movie.addReview(req, res);
  });

  app.delete('/review/:movieid/:reviewid', (req, res) => {
    movie.deleteReview(req, res);
  });
}


// app.post('/product', (req, res) => {
//   product.addProduct(req, res);
// });

// app.put('/product/:id', (req, res) => {
//   product.editProduct(req, res);
// });

// app.delete('/product/:id', (req, res) => {
//   product.deleteProduct(req, res);
// });

// app.get('/product/:id', (req, res) => {
//   product.getProduct(req, res);
// });