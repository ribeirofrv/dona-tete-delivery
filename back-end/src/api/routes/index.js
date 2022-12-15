const customer = require('./customer.routes');
const login = require('./login.routes');
const register = require('./register.routes');
const seller = require('./seller.routes');
const admin = require('./admin.routes');

module.exports = { login, customer, register, seller, admin };
