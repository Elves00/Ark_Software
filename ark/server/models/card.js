const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

//Card with name and view count
const CardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a Cardname"],
  },
  path: {
    type: String,
    required: [true, "Please provide a card path"],
  },
  image_path: {
    type: String,
    required: [true, "Please provide a image path"],
  },
  tag: {
    type: String,
    required: [true, "Please provide a tag for the card"],
  },
  content: {
    type: String,
    required: [false, "Please provide card content"],
  },
  hit: {
    type: Number,
    required: [false, "view number"],
  },
});

module.exports = mongoose.model("Card", CardSchema);
