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
        await this.isResponseExists(product, 'Product not found!');
        return product;
    }

    async getAllProducts(){
        const product = await this.productDao.getAllProducts();
        await this.isResponseExists(product, 'Product not found!');
        return product;
    }

    async getProductById(id){
        const product = await this.productDao.getProductById(id);
        await this.isResponseExists(product, 'Product not found!');
        return product;
    }

    async deleteProduct(id){
        const product = await this.productDao.deleteProduct(id);
        await this.isResponseExists(product, 'Product not found!');
        return product;
    }

    async updateProduct(id, data){
        const product = await this.productDao.updateProduct(id, data);
        await this.isResponseExists(product, 'Product not found!');
        return product;
    }

}

const productService = new ProductService(productDao)

module.exports = productService;
