const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

// postman example: http://localhost:3000/reviews/?sort=newest&productid=40344
router.get('/', (req, res) => {
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
    .catch((err) => res.send(err));
});

// {"product_id": 40344, "rating": 4, "summary": "gdasgdasgdas",
// "body": "hello i am the body", "recommend": true, "name": "user"
// "email": "user@user.com", "photos":[], "characteristics": {}}
router.post('/', (req, res) => {
  controllers
    .create('reviews', req.body)
    .then(() => {
      res.status(201).end();
    }).catch((err) => res.send(err));
});

router.put('/:review_id/helpful', (req, res) => {
  controllers
    .update(`reviews/${req.params.review_id}/helpful`)
    .then(() => {
      res.status(204).end();
    }).catch((err) => res.send(err));
});

router.put('/:review_id/report', (req, res) => {
  controllers
    .update(`reviews/${req.params.review_id}/report`)
    .then(() => {
      res.status(204).end();
    }).catch((err) => res.send(err));
});

module.exports = router;
