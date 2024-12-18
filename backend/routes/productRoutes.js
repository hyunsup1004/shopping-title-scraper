const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
router.post('/generate', productController.generateProductTitles);
router.post('/create', productController.createProduct);
router.get('/', productController.getAllProducts);
module.exports = router;
