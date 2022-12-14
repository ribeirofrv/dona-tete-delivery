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

module.exports = { adminRegister };