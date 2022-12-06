const express = require('express');
// const loginController = require('../controllers/login.controller');

const registerRouter = express.Router();

registerRouter.post('/', loginController.login);

module.exports = registerRouter;