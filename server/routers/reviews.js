const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

// postman example: http://localhost:3000/reviews/?sort=newest&productid=40344
router.get('/', (req, res) => {
  console.log(req.query);
  controllers
    .getAll(`reviews/?page=${req.query.page || 1}&count=${req.query.count || 5}
    &sort=${req.query.sort}&product_id=${req.query.productid}`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => res.send(err));
});

router.get('/meta', (req, res) => {
  controllers
    .getAll(`reviews/meta/?product_id=${req.query.productid}`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

// router.post('/', (req, res) => {
// });

// router.put('/:review_id/helpful', (req, res) => {
// });

// router.put('/:review_id/report', (req, res) => {
// });

module.exports = router;
