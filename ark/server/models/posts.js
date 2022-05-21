const mongoose = require("mongoose");

//Card with name and view count
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a post title"],
  },
  date: {
    type: Date,
    required: [false, "Date of posting"],
  },
  user_id: {
    type: String,
    required: [true, "What user posted"],
  },
  name: {
    type: String,
    required: [true, "What user posted"],
  },
  content: {
    type: String,
    required: [false, "view number"],
  },
  raiting: {
    type: Number,

    required: [false, "Whats the raiting"],
  }
});

module.exports = mongoose.model("Post", PostSchema);
