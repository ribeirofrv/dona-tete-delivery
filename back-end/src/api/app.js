const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorMiddleware');
const loginRouter = require('./routes/login.routes');
const registerRouter = require('./routes/register.routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use(errorMiddleware);

app.get('/tea', (_req, res) => res.status(418).end());

module.exports = app;
