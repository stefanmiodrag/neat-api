const userController = require("../../controllers/users");

module.exports = app => {
  app.route("/api/v1/users").get(userController.getUsers);

  app.route("/api/v1/users/user/:userId").get(userController.getUser);

  app.route("/api/v1/users/:userId").post(userController.updateUser);
};
