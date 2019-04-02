const Product = require('../model/product');

module.exports.getProduct = () => {
    return Product.find({}, (err) => {
        if (err) throw err;
    });
}

module.exports.getProductByID = (productID) => {
    return Product.findById(productID, (err) => {
        if (err) throw err;
    });
}

module.exports.postProduct = (product) => {
    Product.create(product, (err) => {
        if (err) throw err;
        console.log('Product saved successfully!');
    })
}

module.exports.putProduct = (productID, product) => {
    Product.findOneAndReplace({ _id: productID }, product, (err) => {
        if (err) throw err;
        console.log("Product updated successfully");
    })
}

module.exports.patchProduct = (productID, product) => {
    Product.findOneAndUpdate({ _id: productID }, { $set: product }, (err) => {
        if (err) throw err;
        console.log("Product updated successfully");
    })
}

module.exports.deleteProduct = (productID) => {
    Product.findByIdAndRemove(productID, (err) => {
        if (err) throw err;
        console.log("Product deleted successfully");
    });
}
