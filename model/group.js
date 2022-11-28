const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  _id: String,
  name: String,
  participants: [
    new mongoose.Schema({
      _id: String,
      name: String,
    }),
  ],
  owed: Number,
  owe: Number,
  summary: [
    new mongoose.Schema({
      _id: String,
      name: String,
      owed: Number,
      owe: Number,
    }),
  ],
  splits: [
    new mongoose.Schema({
      _id: Number,
      name: String,
      is_group: Boolean,
      created_on: Number,
      group: new mongoose.Schema({
        _id: String,
        name: String,
      }),
      owed: Number,
      owe: Number,
      statements: [
        new mongoose.Schema({
          _id: String,
          name: String,
          owed: Number,
          owe: Number,
        }),
      ],
    }),
  ],
});

module.exports = mongoose.model("groups", groupSchema);
