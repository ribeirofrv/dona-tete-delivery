const { checkPassword } = require('../helpers/bcrypt');
const { User } = require('../../database/models');
const errorGenerate = require('../helpers/errorGenerate');

const { generateToken } = require('../helpers/token');

const login = async (email, bodyPassword) => {
  const user = await User.findOne({ where: { email } });
  console.log("🚀 ~ file: users.service.js:9 ~ login ~ user", user)

  if (!user || !checkPassword(bodyPassword, user.password)) {
    console.log('dentro do if');
    throw errorGenerate(404, 'Not found'); // criar o middleware de erro e erro
  }

  const { id, role, name } = user;
  const token = generateToken({ email, id, role, name });

  return { token, email, role, name };
};

module.exports = {
  login,
};