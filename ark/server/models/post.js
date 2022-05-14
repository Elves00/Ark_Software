const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  myFile: String,
});


module.exports = mongoose.model("Post", postSchema);