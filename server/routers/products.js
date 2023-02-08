const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', (req, res) => {
  controllers
    .getAll(
      `products/?page${req.query.page || 1}&count=${req.query.count || 5}`,
    )
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

router.get('/:productid', (req, res) => {
  controllers
    .getAll(`products/${req.params.productid}`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      err;
      res.status(400).send(err);
    });
});

router.get('/:productid/styles', (req, res) => {
  controllers
    .getAll(`products/${req.params.productid}/styles`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

router.get('/:productid/related', (req, res) => {
  controllers
    .getAll(`products/${req.params.productid}/related`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

module.exports = router;
