const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        firstName: { type: String },
        lastName: { type: String },
        nickName: { type: String },
        email: { type: String },
        address1: { type: String },
        address2: { type: String },
        country: { type: String },
        state: { type: String },
        zip: { type: Number },
        phone: { type: Number }
    },
    cart: {
        products: [
            {
                id: { type: String },
                quantity: { type: Number },
                amount: { type: Number }
            }
        ],
        totalQuantity: { type: Number },
        totalAmount: { type: Number },
    },
    date: { type: Date },
    status: { type: Boolean }
}, { collection: 'order' });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
