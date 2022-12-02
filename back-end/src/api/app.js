const cors = require('cors');
require('express-async-errors');
const express = require('express');

const routes = require('../api/routes/index');
const errorHandle = require('../api/middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/login', routes.login);
app.use('/customer', routes.customer);

app.use(errorHandle);

module.exports = app;
