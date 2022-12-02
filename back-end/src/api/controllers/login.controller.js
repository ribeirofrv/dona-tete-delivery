const userService = require('../services/users.service');

const login = async (req, res, next) => {
 try {
  const { email, password } = req.body;
  const user = await userService.login(email, password);
  console.log("🚀 ~ file: login.controller.js:7 ~ login ~ user", user)
  return res.status(200).json(user);
 } catch (error) {
    next(error);
 }
};

module.exports = {
  login,
};