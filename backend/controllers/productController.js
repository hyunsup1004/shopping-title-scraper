const Product = require('../models/Product');
const productService = require('../services/productService');
exports.generateProductTitles = async (req, res) => {
  const { keywords } = req.body;
  try {
    const productData = await productService.getNaverProductData(keywords);
    const titles = productData.map(item => item.title);
    res.status(200).json({ titles });
  } catch (error) {
    res.status(500).json({ message: '상품명 생성 실패', error: error.message });
  }
};
exports.createProduct = async (req, res) => {
  const { title, description, category, price } = req.body;
  try {
    const newProduct = new Product({ title, description, category, price });
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create product', error: error.message });
  }
};
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error: error.message });
  }
};