const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', (req, res) => {
  controllers
    .getAll('cart')
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => res.status(400).send(err));
});

// router.post('/', (req, res) => {
// });

module.exports = router;
