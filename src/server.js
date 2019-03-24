const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const bodyParser = require("body-parser");
const config = require("./config");
const cors = require("cors");

const app = express(); // return instance of the app

// setting up the corse config
app.use(
  cors({
    origin: "http://localhost:3001"
  })
);

// tell the app to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Read Version 1 Routes
fs.readdirSync(`${__dirname}/routes/v1`).map(file => {
  require(`./routes/v1/${file}`)(app);
});

app.get("*", (req, res) =>
  res.status(404).json({
    message: "Seems like the endpoint you're looking for no longer exists."
  })
);

const port = config.port || 3000;

app.listen(port, err => {
  if (err) {
    console.log(err); //TODO: improve the error handling
    process.exit(1);
  }

  require("./utils/db");

  console.log(`Server ready on port ${port}`);
});
