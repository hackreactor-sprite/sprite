const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/products', (req, res) => {
  controllers
    .getAll('products')
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

router.get('/reviews', (req, res) => {
  controllers
    .getAll('reviews')
    .then(() => {
      res.send();
    })
    .catch((err) => new Error(err));
});

module.exports = router;
