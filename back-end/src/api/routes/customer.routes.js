const { Router } = require('express');

const customerController = require('../controllers/customer.controller');

const customerRoute = Router();

customerRoute.get('/products', customerController.getAllProducts);
customerRoute.get('/checkout', customerController.getAllSeller);

module.exports = customerRoute;
