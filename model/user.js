const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  contact: [
    new mongoose.Schema({
      _id: String,
      name: String,
    }),
  ],
  groups: [
    new mongoose.Schema({
      _id: String,
      name: String,
    }),
  ],
});

module.exports = mongoose.model("user", userSchema);
