const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const api = express();

api.use(cors());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.listen(config.backend.port, err => {
  if (err) {
    console.err(err);
    process.exit(1);
  }

  require("./common/db");

  fs.readdirSync(path.join(__dirname, "routes")).map(file => {
    require("./routes/" + file)(api);
  });

  console.log(`API is now running on port ${config.backend.port}`);
});

module.exports = api;
