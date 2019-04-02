const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 4000;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/web-demo', {
    useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const productRoute = require('./api/routes/products');
const orderRoute = require('./api/routes/orders');

app.use(productRoute);
app.use(orderRoute);

app.listen(port, () => {
    console.log('Server is up on port', port)
})