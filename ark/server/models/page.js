const { Int32 } = require("mongodb");
const mongoose = require("mongoose");


const block = new mongoose.Schema({
  h1: {
    type: String,
    required: [true, "Please provide a title"],
  },
  content: {
    type: String,
    required: [true, "Please provide some content"],
  },
});

//Card with name and view count
const pageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a page name"],
  },
  content:{
    type: block,
    required: [true,"The page must have content"]
  }
});

module.exports = mongoose.model("Page", pageSchema);
