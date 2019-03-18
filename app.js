const productControler = require('./api/controller/product')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const productRoute = require('./api/routes/product');

app.use(productRoute);

app.listen(port, () => {
    console.log('Server is up on port', port)
})