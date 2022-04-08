const mongoose = require("mongoose");

//Card with name and view count
const CardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a Cardname"],
  },
  count: {
    type: String,
    required: [true, "A number"],
  },
});

module.exports = mongoose.model("Card", CardSchema);
