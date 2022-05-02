const mongoose = require("mongoose");

//Card with name and view count
const bossPageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a Cardname"],
  },
  content: {
    type: String,
    required: [true, "A number"],
  },
  mechanics: {
    type: String,
    required: [true, "A number"],
  },
  count: {
    type: String,
    required: [true, "A number"],
  },
});

module.exports = mongoose.model("bossPage", bossPageSchema);
