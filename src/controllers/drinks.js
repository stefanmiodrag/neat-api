const Drink = require("../models/drink");

/**
 * Find all drinks
 *
 * @param {object} req The request object
 * @param {object} res The response object
 *
 **/
const getDrinks = (req, res) => {
  Drink.find({})
    .then(drinks => {
      return res.json({
        message: "The drinks were found correctly.",
        drinks
      });
    })
    .catch(error => {
      return res.status(422).json({
        message: "There was an error finding the drinks.",
        error
      });
    });
};

/**
 * Find a specific drink
 *
 * @param {object} req The request object
 * @param {object} res The response object
 *
 **/
const getDrink = (req, res) => {
  const drinkId = req.params.drinkId;
  Drink.findOne({ _id: drinkId })
    .then(drink => {
      return res.json({
        message: "The drink was found correctly.",
        drink
      });
    })
    .catch(error => {
      return res.status(422).json({
        message: "There was an error finding the drink.",
        error
      });
    });
};

/**
 * Create a new drink and save it in the database
 *
 * @param {object} req The request object
 * @param {object} res The response object
 *
 **/
const newDrink = (req, res) => {
  const name = req.body.name;
  const alternative = req.body.alternative;
  const glass = req.body.glass;
  const ingredients = req.body.ingredients;
  const instructions = req.body.instructions;

  Drink.create({
    name,
    alternative,
    glass,
    ingredients,
    instructions
  })
    .then(drink => {
      return res.json({
        message: "You have added a new drink.",
        drink
      });
    })
    .catch(error => {
      if (error.name === "ValidationError") {
        return res.status(422).json({
          message: "There was an issue with your request.",
          errors: error.errors
        });
      }
      return res.status(500).json({
        message: "There was an unexpected error."
      });
    });
};

/**
 * Update a specific drink
 *
 * @param {object} req The request object
 * @param {object} res The response object
 *
 **/
const updateDrink = (req, res) => {
  const drinkId = req.params.drinkId;
  Drink.findOne({ _id: drinkId })
    .update({
      name: req.body.name,
      alternative: req.body.alternative,
      glass: req.body.glass,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions
    })
    .then(drink => {
      return res.json({
        message: "The drink has been updated.",
        drink
      });
    })
    .catch(error => {
      return res.status(422).json({
        message: "There was an error updating the drink.",
        error
      });
    });
};

/**
 * Remove a specific drink
 *
 * @param {object} req The request object
 * @param {object} res The response object
 *
 **/
const removeDrink = (req, res) => {
  const drinkId = req.params.drinkId;
  Drink.findOne({ _id: drinkId })
    .remove({})
    .then(drink => {
      return res.json({
        message: "The drink has been removed.",
        drink
      });
    })
    .catch(error => {
      return res.status(422).json({
        message: "There was an error removing the drink.",
        error
      });
    });
};

module.exports = {
  getDrinks,
  getDrink,
  newDrink,
  updateDrink,
  removeDrink
};
