const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.get("/", productController.getAllProducts.bind(productController));
router.get("/:id", productController.getProductById.bind(productController));
router.post("/", productController.createProduct.bind(productController));
router.delete("/:id", productController.deleteProduct.bind(productController));
router.put("/:id", productController.updateProduct.bind(productController));

module.exports = router;