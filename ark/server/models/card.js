const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

//Card with name and view count
const CardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a Cardname"],
  },
  content: {
    type: String,
    required: [false, "A number"],
  },
  count: {
    type: String,
    required: [true, "A number"],
  },
  hit: {
    type: Number,
    required: [false, "view number"],
  },
});

module.exports = mongoose.model("Card", CardSchema);
