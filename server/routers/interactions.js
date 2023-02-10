const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

// example: http://localhost:3000/interactions/
// example: {"element": "button", "widget": "overview"}
router.post('/', (req, res) => {
  const newDate = new Date();
  req.body.time = JSON.stringify(newDate);
  controllers.create('interactions/', req.body)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => res.send(`backend req error: ${err}`));
});

module.exports = router;
