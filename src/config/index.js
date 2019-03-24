module.exports = {
  env: process.env.NODE_ENV || "development",
  mongodbUri: process.env.MONGODB_URI || "mongodb://localhost:27017/api",
  port: process.env.PORT || "3000"
};
