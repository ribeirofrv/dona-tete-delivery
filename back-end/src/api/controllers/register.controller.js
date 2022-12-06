const userService = require('../services/users.service');

const login = async (req, res, next) => {
 try {
  const { body } = req;
  const user = await userService.register(body);
  return res.status(201).json(user);
 } catch (error) {
    next(error);
 }
};

module.exports = {
  login,
};