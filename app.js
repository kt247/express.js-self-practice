const express = require('express')
const app = express()
const bodyParser = require('body-parser');
// const port = 4000;
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const productRoute = require('./api/routes/products');
const orderRoute = require('./api/routes/orders');

app.use(productRoute);
app.use(orderRoute);

app.listen(port || 4000, () => {
    console.log('Server is up on port', port || 4000)
})