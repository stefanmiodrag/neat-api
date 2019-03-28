const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  mongodbUri: "mongodb://localhost:27017/api" || process.env.MONGODB_URI,
  port: process.env.PORT || "3000"
};
