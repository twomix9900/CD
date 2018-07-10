const axios = require('axios');
@app.get('/people', function (req, res) {
  // use the axios .get() method - provide a url and chain the .then() and .catch() methods
  axios.get(url)
    .then(data => {
      // log the data before moving on! 
      console.log(data);
      // rather than rendering, just send back the json data!
      res.json(data);
    })
    .catch(error => {
      // log the error before moving on!
      console.log(error);
      res.json(error);
    })
});