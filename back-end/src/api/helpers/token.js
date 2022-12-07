const { sign, verify } = require('jsonwebtoken');
const fs = require('fs');
require('dotenv/config');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const secretKey = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const generateToken = (user) => {
  const token = sign(
    user,
    secretKey,
    jwtConfig,
  );
  return token;
};

const authenticate = (token) => {
  const decoded = verify(token, secretKey);
  return decoded;
};

module.exports = {
  generateToken,
  authenticate,
};