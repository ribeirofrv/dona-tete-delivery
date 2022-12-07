const { Router } = require('express');

const sellerController = require('../controllers/seller.controller');
const { authorizationToken } = require('../middlewares/authToken');

const sellerRoute = Router();

sellerRoute.get('/orders', authorizationToken, sellerController.getSalesBySellerId);

module.exports = sellerRoute;