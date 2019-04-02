const Order = require('../model/order');

module.exports.getOrder = () => {
    return Order.find({}, (err) => {
        if (err) throw err;
    });
}

module.exports.postOrder = (order) => {
    return Order.create(order, (err) => {
        if (err) throw err;
    });
}
