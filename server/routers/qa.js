const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/questions', (req, res) => {
  controllers
    .getAll(`reviews/?page=${req.query.page || 1}&count=${req.query.count || 5}
    &product_id=${req.query.productid}`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => res.send(err));
});

router.get('/questions/:question_id/answers', (req, res) => {
  controllers
    .getAll(`qa/questions/${req.params.question_id}/answers?page=${req.query.page || 1}&count=${req.query.count || 5}`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => res.send(err));
});

// router.post('/questions', (req, res) => {
// });

// router.post('/questions/:question_id/answers', (req, res) => {
// });

// router.put('/questions/:question_id/helpful', (req, res) => {
// });

// router.put('/questions/:question_id/report', (req, res) => {
// });

// router.put('/answers/:answer_id/helpful', (req, res) => {
// });

// router.put('/answers/:answer_id/report', (req, res) => {
// });

module.exports = router;
