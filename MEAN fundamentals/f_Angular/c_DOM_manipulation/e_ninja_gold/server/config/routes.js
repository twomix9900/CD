const mongoose = require('mongoose');
Gold = mongoose.model('Gold');
const gold = require('../controllers/golds.js')
module.exports =  app => {
  // app.get('/gold/', (req, res) => {
  //   gold.getGold(req, res);
  // });
  
  app.put('/farm/:id', (req, res) => {
    gold.farm(req, res);
  });
  
  app.put('/cave/:id', (req, res) => {
    gold.cave(req, res);
  });

  app.put('/house/:id', (req, res) => {
    gold.house(req, res);
  });

  app.put('/casino/:id', (req, res) => {
    gold.casino(req, res);
  });

  app.post('/reset/', (req, res) => {
    gold.reset(req, res);
  });
}