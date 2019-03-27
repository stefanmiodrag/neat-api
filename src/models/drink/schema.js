const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name."]
  },
  alternative: {
    type: Array
  },
  glass: {
    type: Number
  },
  instructions: {
    type: String,
    required: [true, "Please enter instructions."]
  },
  ingredients: {
    type: Array,
    required: [true, "Please enter the ingredients."]
  }
});
