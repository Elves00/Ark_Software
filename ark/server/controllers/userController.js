const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = {
  createOne: (req, res) => {
    let newUserDetails = req.body;
    newUserDetails._id = new mongoose.Types.ObjectId();

    let user = new User(newUserDetails);
    user.save((err) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.json(user);
    });
  },
};
