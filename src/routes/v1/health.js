const healthcheck = require("express-healthcheck");
const mongoose = require("mongoose");

module.exports = app => {
  app.route("/api/v1/health").get(
    healthcheck({
      test: () => {
        const state = mongoose.connection.readyState;
        if (state === 0 || state === 3) return { health: "Database is disconnected ❌" };
        return null;
      },
      healthy: () => ({ health: "We're up and running healthy ✅" })
    })
  );
};
