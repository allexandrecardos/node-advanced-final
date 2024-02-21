//product.controller.js
const productService =  require("../services/product.service")

class ProductController{
    constructor(productService) {
        this.productService = productService;
    }

    async createProduct(req, res){
        try{
            req.body.UserId = req.user.userId;
            const product = await this.productService.createProduct(req.body);
            res.status(201).json({ product: product });
        }catch(err){
            res.status(500).json({ message: 'Fatal Error!', error: err.message});
        }
    }

    async getAllProducts(req, res){
        try{
            const product = await this.productService.getAllProducts();
            res.status(200).json({ product: product });
        }catch(err){
            res.status(500).json({ message: 'Fatal Error!', error: err.message});
        }
    }

    async getProductById(req, res){
        try{
            const product = await this.productService.getProductById(req.params.id);
            res.status(200).json({ product: product })
        }catch(err){
            res.status(500).json({ message: 'Fatal Error!', error: err.message});
        }
    }

    async deleteProduct(req, res){
        try{
            await this.productService.deleteProduct(req.params.id);
            res.status(200).json({ message: 'Product deleted successful!'})
        }catch(err){
            res.status(500).json({ message: 'Fatal Error!', error: err.message});
        }
    }

    async updateProduct(req, res){
        try{
            await this.productService.updateProduct(req.params.id, req.body);
            res.status(200).json({ message: 'Product deleted successful!'})
        }catch(err){
            res.status(500).json({ message: 'Fatal Error!', error: err.message});
        }
    }

}

const productController = new ProductController(productService)

module.exports = productController;
