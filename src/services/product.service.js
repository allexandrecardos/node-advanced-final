// user.service.js
const Service = require('./service');
const productDao = require('../daos/product.dao');

class ProductService extends Service{

    constructor(productDao) {
        super();
        this.productDao = productDao;
    }

    async createProduct(data){
        const product = await this.productDao.createProduct(data);
        this.isResponseExists(product);
        return product;
    }

    async getAllProducts(){
        const product = await this.productDao.getAllProducts();
        this.isResponseExists(product);
        return product;
    }

    async getProductById(id){
        const product = await this.productDao.getProductById(id);
        this.isResponseExists(product);
        return product;
    }

    async deleteProduct(id){
        const product = await this.productDao.deleteProduct(id);
        this.isResponseExists(product);
        return product;
    }

    async updateProduct(id, data){
        const product = await this.productDao.updateProduct(id, data);
        this.isResponseExists(product);
        return product;
    }

}

const productService = new ProductService(productDao)

module.exports = productService;
