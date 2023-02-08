const express = require('express');
const path = require('path');
const products = require('./routers/products');
const reviews = require('./routers/reviews');
const qa = require('./routers/qa');
const cart = require('./routers/cart');
const interactions = require('./routers/interactions');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/products', products);
app.use('/reviews', reviews);
app.use('/qa', qa);
app.use('/cart', cart);
app.use('/interactions', interactions);

const PORT = process.env.port || 3000;
app.listen(PORT);
`Listening at http://localhost:${PORT}`;
