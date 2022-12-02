const { Router } = require('express');

const { getAllProducts } = require('../controllers/customers.controller');

const customerRoute = Router();

customerRoute.get('/products', getAllProducts);

module.exports = customerRoute;
