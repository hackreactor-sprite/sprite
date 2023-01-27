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

router.get('/products/:productid', (req, res) => {
  controllers
    .getAll(`products/${req.params.productid}`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

router.get('/products/:productid/styles', (req, res) => {
  controllers
    .getAll(`products/${req.params.productid}/styles`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

router.get('/products/:productid/related', (req, res) => {
  controllers
    .getAll(`products/${req.params.productid}/related`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

router.get('/reviews/:page/:count/:sort/:productid', (req, res) => {
  // const id = req.query.product_id;
  console.log(req.params, 'req');
  controllers
    .getAll(`reviews/?page=${req.params.page}&count=${req.params.count}
    &sort=${req.params.sort}&product_id=${req.params.productid}`)
    .then((data) => {
      console.log(data, 'data');
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

router.get('/reviews/meta/:productid', (req, res) => {
  // const id = req.query.product_id;
  controllers
    .getAll(`reviews/meta/?product_id=${req.params.productid}`)
    .then((data) => {
      console.log(data, 'data');
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

// router.post('/reviews/meta/:productid', (req, res) => {
//   // const id = req.query.product_id;
//   controllers
//     .post(`reviews/meta/?product_id=${req.params.productid}`) //NEEDS EDIT
//     .then((data) => {
//       console.log(data, 'data');
//       res.send(data.data);
//     })
//     .catch((err) => new Error(err));
// });

// router.put('/reviews/:reviewid/helpful', (req, res) => {
//   // const id = req.query.product_id;
//   controllers
//     .post(`reviews/?review_id=${req.params.reviewid}/helpful`)
//     .then((data) => {
//       console.log(data, 'data');
//       res.send(data.data);
//     })
//     .catch((err) => new Error(err));
// });

// router.put('/reviews/:reviewid/report', (req, res) => {
//   // const id = req.query.product_id;
//   controllers
//     .post(`reviews/?review_id=${req.params.reviewid}/report`)
//     .then((data) => {
//       console.log(data, 'data');
//       res.send(data.data);
//     })
//     .catch((err) => new Error(err));
// });

router.get('/qa/questions/:productid/:page/:count', (req, res) => {
  controllers
    .getAll(`qa/questions/?product_id=${req.params.productid}
    &page=${req.params.page}&count=${req.params.count}`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

router.get('/qa/questions/:questionid/answers/:page/:count', (req, res) => {
  controllers
    .getAll(`qa/questions/?question_id=${req.params.questionid}/answers/
    ?page=${req.params.page}&count=${req.params.count}`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => new Error(err));
});

module.exports = router;
