const mongoose = require("mongoose");
const Card = require("../models/Card");


//Card creation
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
  // This section will help you get a list of all the records.

  get: (req, res) => {
    Card.find()
      .select('name count')
      .then((allCard) => {

        return res.status(200).json({
          success: true,
          message: 'A list of all causes',
          Cause: allCause,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
        });
      });
  },
};
