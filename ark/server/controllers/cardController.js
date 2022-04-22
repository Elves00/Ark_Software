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

  
  get: ((req, res) => {
    Card.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }),

  // get: async (req, res) => {
  //   try {
  //     const card = await Card.find({})
  //     if (!card) {
  //       res.status(404).json({ success: false, error: "No Cards" });
  //     }
  //     res.json(Card);
  //   } catch (err) {
  //     console.log(err);

  //   }

  // },

  /*
// This section will help you get a list of all the records.
  recordRoutes.route("/record").get(function (req, res) {
    let db_connect = dbo.getDb("employees");
    db_connect
      .collection("records")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });
  */


//   get((req, res) => {
//   user.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

};
