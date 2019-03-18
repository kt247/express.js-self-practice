const products = require('../../db_product');

// module.exports.index = (req, res) => {
//     res.send(products);
// };

module.exports.getProducts = (page) => {
    const pageSize = 8;
    if (page === undefined) {
        return products;
    }
    return products.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
}

module.exports.getProductByID = (productID) => {
    return products.filter(x => x.id == productID);
}

module.exports.postProduct = (product) => {
    products.push(product);
}

module.exports.putProduct = (product) => {
    let index = products.findIndex(x => x.id == product.id);
    if (index !== -1) {
        products.splice(index, 1, product);
    }
}

module.exports.patchProduct = (product) => {
    let index = products.findIndex(x => x.id == product.id);
    if (index !== -1) {
        products[index] = product;
    }
}

module.exports.deleteProduct = (product) => {
    let index = products.findIndex(x => x.id == product.id);
    if (index !== -1) {
        products.splice(index, 1);
    }
}