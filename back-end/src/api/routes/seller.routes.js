const { Router } = require('express');

const sellerController = require('../controllers/seller.controller');
const { authorizationToken } = require('../middlewares/authToken');

const sellerRoute = Router();

sellerRoute.get('/orders/:id', authorizationToken, sellerController.getSaleById);
sellerRoute.get('/orders', authorizationToken, sellerController.getSalesBySellerId);
sellerRoute.patch('/orders/:id', authorizationToken, sellerController.updateSaleStatus);

module.exports = sellerRoute;