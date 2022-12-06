const md5 = require('md5');
const { checkPassword } = require('../helpers/bcrypt');
const { User } = require('../../database/models');
const errorGenerate = require('../helpers/errorGenerate');

const { generateToken } = require('../helpers/token');

const login = async (email, bodyPassword) => {
  const user = await User.findOne({ where: { email } });

  if (!user || !checkPassword(bodyPassword, user.password)) {
    throw errorGenerate(404, 'Not found'); // criar o middleware de erro e erro
  }

  const { id, role, name } = user;
  const token = generateToken({ email, id, role, name });

  return { token, email, role, name };
};

const register = async (body) => {
  const { email, password, name } = body;

  const userEmail = await User.findOne({ where: { email } });
  const userName = await User.findOne({ where: { name } });

  if (userEmail || userName) {
    throw errorGenerate(409, 'Conflict');
  }

  const newHash = md5(password);

  const newUser = await User.create({ email, password: newHash, name, role: 'customer' });

  const { id, role } = newUser;
  const token = generateToken({ id, role, name, email });
  return { token, email, role, name };
};

module.exports = {
  login,
  register,
};