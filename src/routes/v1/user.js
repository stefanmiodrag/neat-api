const userController = require("../../controllers/users");

module.exports = app => {
  // Find all users
  app.route("/api/v1/users").get(userController.getUsers);

  // Find a specific user
  app.route("/api/v1/users/user/:userId").get(userController.getUser);

  // Update a specific user
  app.route("/api/v1/users/user/:userId").put(userController.updateUser);

  // Remove a specific user
  app.route("/api/v1/users/user/:userId").delete(userController.removeUser);
};
