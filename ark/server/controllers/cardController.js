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

  //checks the database req=request res=response
  findOne: async (req, res) => {
    // const {email, password} = req.body;
    const { name, count } = req.body;

    //If either of name or count are not present we have a problem
    if (!name || !count) {
      res.status(400).json({ success: false, error: "Please provide email and password" })
    }

    //Try find one in the database
    try {
      const user = await User.findOne({ name })
      if (!user) {
        res.status(404).json({ success: false, error: "Invalid name" });
      }
      //Token stuff i dont understand
      res.status(200).json({
        success: true,
        token: "ogweoifnweiofbw"
      });
    } catch (err) {
      console.log(err);
      // res.status(500).json({success:false, error: err.message});
    }
  },


  get: async (req, res) => {
    try {
      const card = await Card.find({})
      if (!card) {
        res.status(404).json({ success: false, error: "No Cards" });
      }
      res.json(Card);
    } catch (err) {
      console.log(err);
    
    }

  }

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

};
