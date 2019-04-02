const express = require('express');
const router = express.Router();
const controller = require('../controller/products');

router.get('/api/products', (req, res) => {
    controller.getProduct(req.query)
        .then(data => res.send(data));
});

router.get('/api/products/:productID', (req, res) => {
    controller.getProductByID(req.params.productID)
        .then(data => res.send(data));
});

router.post('/api/products', (req, res) => {
    res.send(controller.postProduct(req.body));
});

router.put('/api/products/:productID', (req, res) => {
    res.send(controller.putProduct(req.params.productID, req.body));
});

router.patch('/api/products/:productID', (req, res) => {
    res.send(controller.patchProduct(req.params.productID, req.body));
});

router.delete('/api/products/:productID', (req, res) => {
    res.send(controller.deleteProduct(req.params.productID));
});

module.exports = router;
