const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorMiddleware');
const routes = require('./routes/index');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', routes.login);
app.use('/register', routes.register);
app.use(errorMiddleware);

app.get('/tea', (_req, res) => res.status(418).end());

module.exports = app;
