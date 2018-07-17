const product = require('../controllers/products.js');

module.exports = (app) => {
  app.get('/products', (req, res) => {
    product.getProducts(req, res);
  });

  app.post('/product', (req, res) => {
    product.addProduct(req, res);
  });

  app.put('/product/:id', (req, res) => {
    product.editProduct(req, res);
  });

  app.delete('/product/:id', (req, res) => {
    product.deleteProduct(req, res);
  });

  app.get('/product/:id', (req, res) => {
    product.getProduct(req, res);
  });

}