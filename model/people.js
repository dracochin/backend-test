const mongoose = require("mongoose");
const challengeSchema = mongoose.Schema({
  name: String,
  age: Number,
  latitude: Number,
  longitude: Number,
  monthly: Number,
  income: Number,
  experienced: Boolean
});

module.exports = mongoose.model("challenge", challengeSchema);
