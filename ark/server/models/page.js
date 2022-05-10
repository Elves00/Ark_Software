const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

//Card with name and view count
const pageSchema = new mongoose.Schema({
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
  image: {
    type: Number,
    required: [false, "view number"],
  },
  tag:{
      type: String,
      required: [true,"Tag"]
  }
});

module.exports = mongoose.model("Page", pageSchema);
