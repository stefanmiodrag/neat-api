module.exports = {
  mongodbUri: process.env.MONGODB_URI || "mongodb://localhost:27017/api",
  port: process.env.PORT || "3000"
};
