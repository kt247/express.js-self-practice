const orders = require('../../db_order');

module.exports.getOrder = () => {
    return orders;
};

module.exports.getOrderByID = (orderID) => {
    return orders.filter(x => x.id == orderID);
};

module.exports.postOrder = (order) => {
    orders.push(order);
};
