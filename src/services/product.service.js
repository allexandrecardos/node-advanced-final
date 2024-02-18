// user.service.js
const productDao = require('../daos/product.dao');

class ProductService {

    constructor(productDao) {
        this.productDao = productDao;
    }

    async createProduct(data){
        return await this.productDao.createProduct(data);
    }

    async getAllProducts(){
        return await this.productDao.getAllProducts();
    }

    async getProductById(id){
        return await this.productDao.getProductById(id);
    }

    async deleteProduct(id){
        return await this.productDao.deleteProduct(id);
    }

    async updateProduct(id, data){
        return await this.productDao.updateProduct(id, data);
    }

}

const productService = new ProductService(productDao)

module.exports = productService;
