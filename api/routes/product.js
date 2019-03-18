const express = require('express');
const router = express.Router();
const controller = require('../controller/product');

router.get('/api/products', (req, res) => {
    res.send(controller.getProducts(req.query.page));
});

router.get('/api/products/:productID', (req, res) => {
    res.send(controller.getProductByID(req.params.productID));
});

router.post('/api/products', (req, res) => {
    res.send(controller.postProduct(req.body));
});

router.put('/api/products/', (req, res) => {
    res.send(controller.putProduct(req.body));
});

router.patch('/api/products/', (req, res) => {
    res.send(controller.patchProduct(req.body));
});

router.delete('/api/products/', (req, res) => {
    res.send(controller.deleteProduct(req.body));
});

module.exports = router;