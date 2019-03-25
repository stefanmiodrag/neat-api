const User = require("../models/user");

/**
 * Find the users information
 *
 * @param {object} req The request object
 * @param {object} res The response object
 *
 **/
const getUsers = (req, res) => {
  User.find({})
    .then(users => {
      return res.json({
        message: "The users were found correctly.",
        users
      });
    })
    .catch(error => {
      return res.status(422).json({
        message: "There was an error finding the users.",
        error
      });
    });
};

/**
 * Find a specific users information
 *
 * @param {object} req The request object
 * @param {object} res The response object
 *
 **/
const getUser = (req, res) => {
  const userId = req.params.userId;
  User.findOne({ _id: userId })
    .then(user => {
      return res.json({
        message: "The user was found correctly.",
        user
      });
    })
    .catch(error => {
      return res.status(422).json({
        message: "There was an error finding the user.",
        error
      });
    });
};

/**
 * Update a specific user
 *
 * @param {object} req The request object
 * @param {object} res The response object
 *
 **/
const updateUser = (req, res) => {
  const userId = req.params.userId;
  User.findOne({ _id: userId })
    .update({ name: req.body.name })
    .then(user => {
      return res.json({
        message: "The user has been updated.",
        user
      });
    })
    .catch(error => {
      return res.status(422).json({
        message: "There was an error updating the users.",
        error
      });
    });
};

/**
 * Remove a specific user
 *
 * @param {object} req The request object
 * @param {object} res The response object
 *
 **/
const removeUser = (req, res) => {
  const userId = req.params.userId;
  User.findOne({ _id: userId })
    .remove({})
    .then(user => {
      return res.json({
        message: "The user has been removed.",
        user
      });
    })
    .catch(error => {
      return res.status(422).json({
        message: "There was an error removing the user.",
        error
      });
    });
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  removeUser
};
