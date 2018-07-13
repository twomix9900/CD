const cake = require('../controllers/cakes.js');
module.exports =  (app) => {
  app.get('/', (req, res) => {
    cake.index(req, res);
  });

  app.get('/cakes', (req, res) => {
    cake.getCakes(req, res);
  })

  app.post('/cake/add', (req, res) => {
    cake.addCake(req, res);
  });

  app.post('/cake/review/add/:id', (req, res) => {
    cake.addReview(req, res);
  });

  // app.get('/cakes/', (req, res) => {
  //   cake.allTasks(req, res);
  // });
  
  // app.post('/new/', (req, res) => {
  //   cake.newTask(req, res);
  // });
  
  // app.delete('/remove/:id/', (req, res) => {
  //   cake.deleteTask(req, res);
  // });

  // app.get('/get/:id/', (req, res) => {
  //   cake.getTask(req, res);
  // });

  // app.put('/update/:id/', (req, res) => {
  //   cake.updateTask(req, res);
  // })

}