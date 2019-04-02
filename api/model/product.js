const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    img_url: { type: String },
    type: { type: String },
    name: { type: String },
    price: { type: Number }
}, { collection: 'product' });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
