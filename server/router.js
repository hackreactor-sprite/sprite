const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.get('/', (req, res) => {
  controllers
    .getAll('products')
    .then((data) => {
      console.log(data.data, 'get data');
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

router.get('/:product_id', (req, res) => {
  controllers
    .getAll('products/' + req.body)
    .then((data) => {
      console.log(data.data, 'get data');
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

module.exports = router;
