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

  //Gets data from mongo db on cards
  get: ((req, res) => {
    //Finds all cards
    Card.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        //Transform card data into json and set as res
        res.json(data)
      }
      //Sort by count in descending order with a limit of 8
    }).sort({ count: -1 }).limit(4)
  }),

  findRaid: async (req, res) => {
    //the content of the search bar
    const { tier,tag } = req.body;
    try {
      console.log(tier)
      const card = await Card.find({ 'tier': tier ,'tag':tag })
      res.json(card)

    } catch (err) {
      // console.log(err);
      res.status(500).json({ success: false, error: err });
    }
  },

  findRaidTier: async (req, res) => {
    //the content of the search bar
    const { term } = req.body;
    try {
      var regexConst = new RegExp(term, 'i');
      const card = await Card.find({ 'name': regexConst ,'tag':'Raid'})
      res.json(card)
    } catch (err) {
      // console.log(err);
      res.status(500).json({ success: false, error: err });
    }
  },

  findDungeon: async (req, res) => {
    //the content of the search bar
    const { tier,tag } = req.body;
    try {
      console.log(tier)
      console.log("Tag"+tag)
      const card = await Card.find({ 'tier': tier ,'tag':tag})
      res.json(card)

    } catch (err) {
      // console.log(err);
      res.status(500).json({ success: false, error: err });
    }
  },

  findDungeonTier: async (req, res) => {
    //the content of the search bar
    const { term } = req.body;
    try {
      var regexConst = new RegExp(term, 'i');
      const card = await Card.find({ 'name': regexConst,'tag':'Dungeon' })
      res.status(200).json(card);

    } catch (err) {
      // console.log(err);
      res.status(500).json({ success: false, error: err });
    }
  },



  //Updates the number of views on a page
  hit: async (req, res) => {

    //The search term
    const id = req.body;
    //What is being updated
    const update = { $inc: { hit: +1 } };

    try {
      //Updates hit counter
      await Card.findOneAndUpdate(id, update).exec();
      console.log(id);
    } catch (err) {
      console.log(err);
    }
  },

};
