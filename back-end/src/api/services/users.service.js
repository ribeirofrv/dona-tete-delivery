const md5 = require('md5');
const { Op } = require('sequelize');
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

  return { token, id, email, role, name };
};

const verifyUser = async (name, email) => {
  const userEmail = await User.findOne({ where: { email } });
  const userName = await User.findOne({ where: { name } });

  if (userEmail || userName) {
    throw errorGenerate(409, 'Conflict');
  }
};

const register = async (body) => {
  const { email, password, name } = body;

  await verifyUser(name, email);

  const newHash = md5(password);

  const newUser = await User.create({ email, password: newHash, name, role: 'customer' });

  const { id, role } = newUser;
  const token = generateToken({ id, role, name, email });
  return { token, email, role, name };
};

const findAllSeller = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' }, raw: true });
  if (!sellers) {
    throw errorGenerate(404, 'No sellers available');
  }
  const sellersNames = sellers.map(({ id, name }) => ({ id, name }));
  return sellersNames;
};

const findUserByName = async (name) => {
  const user = await User.findOne({ where: { name } });
  if (!user) {
    throw errorGenerate(404, 'Not found');
  }
  return user.id;
};

const verifyAdmin = async (id) => {
  const admin = await User.findByPk(id);

  if (admin.role !== 'administrator') {
    throw errorGenerate(401, 'Unauthorized');
  }
};

const adminRegister = async (adminId, body) => {
  const { email, password, name, role } = body;

  await verifyUser(name, email);
  await verifyAdmin(adminId);

  const newHash = md5(password);

  await User.create({ email, password: newHash, name, role });

  return { name, email, role };
};

const getAllUsers = async (id) => {
  await verifyAdmin(id);
  const users = await User.findAll({ where: { role: { [Op.not]: 'administrator' } } });
  return users;
}; 

const deleteMe = async (id, adminId) => {
  await verifyAdmin(adminId);
  await User.destroy({ where: { id } });
}; 

module.exports = {
  login,
  register,
  findAllSeller,
  findUserByName,
  adminRegister,
  getAllUsers,
  deleteMe,
};
