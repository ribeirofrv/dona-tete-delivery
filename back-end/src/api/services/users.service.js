const { checkPassword } = require('../helpers/bcrypt');
const { User } = require('../../database/models');
const errorGenerate = require('../helpers/errorGenerate');

const { generateToken } = require('../helpers/token');

const findUser = async (data) => User.findOne({ where: { data } });

const login = async (email, bodyPassword) => {
  // const user = await User.findOne({ where: { email } });
  const user = await findUser(email);

  if (!user || !checkPassword(bodyPassword, user.password)) {
    throw errorGenerate(404, 'Not found'); // criar o middleware de erro e erro
  }

  const { id, role, name } = user;
  const token = generateToken({ email, id, role, name });

  return { token, email, role, name };
};

const register = async (body) => {
  const { email, password, name } = body;

  const userEmail = await findUser(email);
  const userName = await findUser(name);

  if(userEmail || userName ) {
    throw errorGenerate(409, 'Conflict');
  }

  const newUser = await User.create({ email, password, name, role: 'customer' });

  const token = generateToken(newUser);
  return { token, email, role, name };
};

module.exports = {
  login,
  register,
};