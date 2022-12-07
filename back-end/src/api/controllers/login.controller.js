const userService = require('../services/users.service');

const login = async (req, res, next) => {
 try {
  const { email, password } = req.body;
  const user = await userService.login(email, password);
<<<<<<< HEAD

=======
  console.log('🚀 ~ file: login.controller.js:7 ~ login ~ user', user);
>>>>>>> main-group-2
  return res.status(200).json(user);
 } catch (error) {
    console.log('🚀 ~ file: login.controller.js:10 ~ login ~ error', error);
    next(error);
 }
};

module.exports = {
  login,
};
