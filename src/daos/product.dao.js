const { User ,Products } = require('../models/index');

class ProductsDAO{

    constructor(Products){
        this.Products = Products
    }

    async createProduct(data){
        return await this.Products.create(data)
    }

    async getAllProducts(){
        return await this.Products.findAll({
            attributes: ['id', 'name', 'price'],
        });
    }

    async getProductById(id){
        return await this.Products.findOne({
            limit: 1,
            where: {
                id
            },
            include:[{
                model: User,
                attributes: ['id', 'username', 'email']
            }]
        });
    }

    async deleteProduct(id){
        return await this.Products.destroy({
            where: {
                id
            }
        });
    }

    async updateProduct(id, data){
        return await this.Products.update(data,{
            where: {
                id
            }
        });
    }


}

const productDao = new ProductsDAO(Products);

module.exports = productDao;