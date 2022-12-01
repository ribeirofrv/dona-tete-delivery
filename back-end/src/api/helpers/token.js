const { sign } = require("jsonwebtoken");
require('dotenv/config');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (user) => {
  const token = sign(
    user,
    process.env.JWT_SECRET || 'secret_key',
    jwtConfig,
  );
  return token;
};

const authenticate = (token) => {
  const decoded = verify(token, process.env.JWT_SECRET || 'secret_key');
  return decoded;
};

module.exports = {
  generateToken,
  authenticate,
}