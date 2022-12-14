const userService = require('../services/users.service');

const adminRegister = async (req, res, next) => {
  try {
   const { body } = req;
   const { id } = req.user;
   const user = await userService.adminRegister(id, body);
   return res.status(201).json(user);
  } catch (error) {
     next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const { id } = req.user;
    const users = await userService.getAllUsers(id);
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = { adminRegister, getAllUsers };