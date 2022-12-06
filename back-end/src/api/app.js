const cors = require('cors');
require('express-async-errors');
const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const loginRouter = require('./routes/login.routes');

const routes = require('./routes/index');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);
app.use(errorMiddleware);

app.use(express.json());
app.use(cors());

app.use('/login', routes.login);
app.use('/customer', routes.customer);

app.use(errorMiddleware);

module.exports = app;
