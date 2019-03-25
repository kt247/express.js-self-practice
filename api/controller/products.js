const products = require('../../db_product');

module.exports.getProducts = ({ category, search, sortBy, sortOrder = 1, page = 1 }) => {
    const pageSize = 8;
    let result = products;
    if (category) {
        result = result.filter(x => x.type == category);
    }
    if (search) {
        result = result.filter(data => data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
    switch (sortBy) {
        case "name":
            result.sort((a, b) => {
                if (a.name > b.name) return sortOrder;
                else if (a.name < b.name) return -sortOrder;
                return 0;
            });
            break;
        case "price":
            result.sort((a, b) => {
                if (a.price > b.price) return sortOrder;
                else if (a.price < b.price) return -sortOrder;
                return 0;
            });
            break;
    }
    if (page) {
        result = result.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
    }
    return result;
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