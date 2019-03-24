const mongoose = require("mongoose");
const config = require("../../config");

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodbUri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection
  .then(db => {
    console.log("The connection to the database was successful.");
    return db;
  })
  .catch(err => {
    console.log("There was an error connecting to the database.", err);
  });
