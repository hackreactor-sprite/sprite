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

router.post('/questions', (req, res) => {
  controllers
    .create('qa/questions', req.body)
    .then(() => {
      res.status(201).end();
    }).catch((err) => res.send(err));
});

// QUESTION ID: 553471
// {"name": "name", "email": "email@email.com",
// "body": "hello i am the body", "photos": []}
router.post('/questions/:question_id/answers', (req, res) => {
  controllers
    .create(`qa/questions/${req.params.question_id}/answers`, req.body)
    .then(() => {
      res.status(201).end();
    }).catch((err) => res.send(err));
});

router.put('/questions/:question_id/helpful', (req, res) => {
  controllers
    .update(`qa/questions/${req.params.question_id}/helpful`)
    .then(() => {
      res.status(204).end();
    }).catch((err) => res.send(err));
});

router.put('/questions/:question_id/report', (req, res) => {
  controllers
    .update(`qa/questions/${req.params.question_id}/report`)
    .then(() => {
      res.status(204).end();
    }).catch((err) => res.send(err));
});

// ANSWER ID: 5989797
router.put('/answers/:answer_id/helpful', (req, res) => {
  controllers
    .update(`qa/answers/${req.params.answer_id}/helpful`)
    .then(() => {
      res.status(204).end();
    }).catch((err) => res.send(err));
});

router.put('/answers/:answer_id/report', (req, res) => {
  controllers
    .update(`qa/answers/${req.params.answer_id}/report`)
    .then(() => {
      res.status(204).end();
    }).catch((err) => res.send(err));
});

module.exports = router;
