//product.controller.js
const Controller = require('./controller')
const productService =  require("../services/product.service")
const jwt = require('jsonwebtoken');

class ProductController extends Controller{
    constructor(productService) {
        super();
        this.productService = productService;
    }

    async createProduct(req, res){
        try{
            req.body.UserId = req.user.userId;
            const product = await this.productService.createProduct(req.body);
            res.status(201).json(product);
        }catch(err){
            console.log(err);
        }
    }

    async getAllProducts(req, res){
        try{
            const product = await this.productService.getAllProducts();
            res.status(200).json(product);
        }catch(err){


        }
    }

    async getProductById(req, res){
        try{
            const product = await this.productService.getProductById(req.params.id);
            res.status(200).json(product)
        }catch(err){
            console.log(err);
        }
    }

    async deleteProduct(req, res){
        try{
            const product = await this.productService.deleteProduct(req.params.id);
            res.status(200).json(product)
        }catch(err){


        }
    }

    async updateProduct(req, res){
        try{
            const product = await this.productService.updateProduct(req.params.id, req.body);
            res.status(200).json(product)
        }catch(err){


        }
    }

}

const productController = new ProductController(productService)

module.exports = productController;
