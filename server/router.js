const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.get('/', (req, res) => {
  controllers
    .getAll() // [{}]
    .then((data) => {
      console.log(data.data, 'get data');
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});
// define the about route
router.get('/:product_id', (req, res) => {
  res.send('About birds');
});

module.exports = router;
