const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const config = require("./config");
const cors = require("cors");
const Sentry = require("@sentry/node");

const app = express();

Sentry.init({ dsn: "https://2bf1f71ca9e8410bb50d6f82e73ec0eb@sentry.io/1426406" });

app.use(
  cors({
    origin: "*"
  })
);

app.use(Sentry.Handlers.requestHandler());
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

app.use(Sentry.Handlers.errorHandler());

// Fallback Error Handling
app.use(function onError(err, req, res, next) {
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.listen(config.port, err => {
  if (err) {
    Sentry.captureException(err);
    process.exit(1);
  }

  require("./utils/db");

  console.log(`Server ready on port ${config.port}`);
});
