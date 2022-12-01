const { Router } = require('express');

const { getAllProducts } = require('../controllers/costumers.controller');

const costumerRoute = Router();

costumerRoute.get('/products', getAllProducts);

module.exports = costumerRoute;
