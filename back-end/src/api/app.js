const cors = require('cors');
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorMiddleware');
const routes = require('./routes/index');

const routes = require('./routes/index');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', routes.login);
app.use('/register', routes.register);
app.use(errorMiddleware);

app.use(express.json());
app.use(cors());

app.use('/login', routes.login);
app.use('/customer', routes.customer);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);

module.exports = app;
