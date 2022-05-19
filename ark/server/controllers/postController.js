const mongoose = require("mongoose");
const Post = require("../models/posts");


//Card creation
module.exports = {
  createOne: (req, res) => {
    let newCardDetails = req.body;
    newCardDetails._id = new mongoose.Types.ObjectId();

    let card = new Post(newCardDetails);
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
    Post.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        //Transform card data into json and set as res
        res.json(data)
      }
      //Sort by count in descending order with a limit of 8
    }).sort({ date: -1 })
  }),

  findRaid: async (req, res) => {
    //the content of the search bar
    const { tier,tag } = req.body;
    try {
      console.log(tier)
      const post = await Post.find({ 'tier': tier ,'tag':tag })
      res.json(post)

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
      const post = await Post.find({ 'name': regexConst ,'tag':'Raid'})
      res.json(post)
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
      await Post.findOneAndUpdate(id, update).exec();
      console.log(id);
    } catch (err) {
      console.log(err);
    }
  },

};
