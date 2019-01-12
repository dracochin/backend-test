const mongoose = require("mongoose");
const config = require("../config");

class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(`mongodb://${config.db.server}/${config.db.database}`)
      .then(() => {
        console.log("Database connection successful");
      })
      .catch(err => {
        console.error("Database connection error");
      });
  }
}
module.exports = new Database();
