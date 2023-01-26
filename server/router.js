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

router.get('/qa/:id', (req, res) => {
  controllers
    .getAll(`qa/products/${req.params.id}`, req.params)
    .then((data) => {
      console.log('backend data', data);
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

module.exports = router;
