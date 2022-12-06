const express = require('express');
const registerController = require('../controllers/register.controller');

const registerRouter = express.Router();

registerRouter.post('/', registerController.register);

module.exports = registerRouter;