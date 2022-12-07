const { Product } = require('../../database/models');

const getAllProducts = async () => {
  const products = await Product.findAll();
  console.log('🚀 ~ file: products.service.js:5 ~ getAllProducts ~ products', products);  
  return products;
};

module.exports = { getAllProducts };