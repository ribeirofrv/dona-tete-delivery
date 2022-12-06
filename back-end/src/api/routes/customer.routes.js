const { Router } = require('express');

const { getAllProducts } = require('../controllers/customer.controller');

const customerRoute = Router();

customerRoute.get('/products', getAllProducts); // teste

module.exports = customerRoute;
