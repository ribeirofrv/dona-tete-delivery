const { Router } = require('express');

const customerController = require('../controllers/customer.controller');
const { authorizationToken } = require('../middlewares/authToken');

const customerRoute = Router();

customerRoute.get('/products', customerController.getAllProducts);
customerRoute.get('/checkout', customerController.getAllSeller); // este abençoado endpoint retorna todos os vendedores
customerRoute.get('/orders/:id', authorizationToken, customerController.getSaleById);
customerRoute.post('/orders', authorizationToken, customerController.createSale);
customerRoute.patch('/orders/:id', authorizationToken, customerController.updateSaleStatus);

module.exports = customerRoute;
