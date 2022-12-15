const { Router } = require('express');

const adminController = require('../controllers/admin.controller');
const { authorizationToken } = require('../middlewares/authToken');

const adminRoute = Router();

adminRoute.post('/manage', authorizationToken, adminController.adminRegister);
adminRoute.get('/manage', authorizationToken, adminController.getAllUsers);
adminRoute.delete('/manage', authorizationToken, adminController.deleteUser);

module.exports = adminRoute;