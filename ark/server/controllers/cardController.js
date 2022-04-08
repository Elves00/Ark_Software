const mongoose = require("mongoose");
const Card = require("../models/Card");

module.exports = {
  createOne: (req, res) => {
    let newCardDetails = req.body;
    newCardDetails._id = new mongoose.Types.ObjectId();

    let card = new Card(newCardDetails);
    card.save((err) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.json(card);
    });
  },
};
