const drinkController = require("../../controllers/drinks");

module.exports = app => {
  // Find all drinks
  app.route("/api/v1/drinks").get(drinkController.getDrinks);

  // Find a specific drink
  app.route("/api/v1/drinks/drink/:drinkId").get(drinkController.getDrink);

  // Create a new drink
  app.route("/api/v1/drinks/drink/new").post(drinkController.newDrink);

  // Update a specific drink
  app.route("/api/v1/drinks/drink/:drinkId").put(drinkController.updateDrink);

  // Remove a specific drink
  app.route("/api/v1/drinks/drink/:drinkId").delete(drinkController.removeDrink);
};
