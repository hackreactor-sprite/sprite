const express = require('express');
const path = require('path');
const router = require('./router.js');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = process.env.port || 3000;

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);
app.use('/', router);
