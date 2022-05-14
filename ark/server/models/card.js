const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

//Card with name and view count
const CardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a Cardname"],
  },
  image: {
    type: String,
    required: [false, "Please provide some"],
  },
  tag: {
    type: String,
    required: [true, "A number"],
  },
  hit: {
    type: Number,
    required: [false, "view number"],
  },
  path: {
    type: String,
    required: [true, "Path to image must be specified"]
  },
  tier:{
    type: Number,
    required: [false,"What tier"]
  }
});

module.exports = mongoose.model("Card", CardSchema);
