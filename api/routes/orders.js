const express = require('express');
const router = express.Router();
const controller = require('../controller/orders');

router.get('/api/orders', (req, res) => {
    res.send(controller.getOrder(req.query));
});

router.post('/api/orders', (req, res) => {
    res.send(controller.postOrder(req.body));
});

module.exports = router;