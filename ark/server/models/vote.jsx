const mongoose = require("mongoose");

//Card with name and view count
const VoteSchema = new mongoose.Schema({
    rait: {
        type: Number,
        required: [true]
      },
});

module.exports = mongoose.model("Vote", VoteSchema);
