const mongoose = require("mongoose");
const Page = require("../models/Page");


//Card creation
module.exports = {
  createOne: (req, res) => {
    let newPageDetails = req.body;
    newPageDetails._id = new mongoose.Types.ObjectId();

    let page = new Page(newPageDetails);
    card.save((err) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.json(page);
    });
  },

  getBlock: ((req, res) => {
    //Finds all cards
    Page.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        //Transform card data into json and set as res
        res.json(data)
      }
      //Sort by count in descending order with a limit of 8
    })
  }),



  //Gets data from mongo db on cards
  get: ((req, res) => {
    //Finds all cards
    Page.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        //Transform card data into json and set as res
        res.json(data)
      }
      //Sort by count in descending order with a limit of 8
    }).sort({ count: -1 }).limit(4)
  }),

  //Updates the number of views on a page
  hit: async (req, res) => {

    //The search term
    const id = req.body;
    //What is being updated
    const update = { $inc: { hit: +1 } };

    try {
      //Updates hit counter
      await Page.findOneAndUpdate(id, update).exec();
      console.log(id);
    } catch (err) {
      console.log(err);
    }
  },

};
