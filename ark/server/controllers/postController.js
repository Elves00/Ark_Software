const mongoose = require("mongoose");
const Post = require("../models/posts");


//Card creation
module.exports = {
  createOne: (req, res) => {
    let newPost = req.body;
    newPost._id = new mongoose.Types.ObjectId();
    console.log("newPost" + newPost)

    let post = new Post(newPost);
    console.log(post);
    post.save((err) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.json(post);
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
    const { tier, tag } = req.body;
    try {
      console.log(tier)
      const post = await Post.find({ 'tier': tier, 'tag': tag })
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
      const post = await Post.find({ 'name': regexConst, 'tag': 'Raid' })
      res.json(post)
    } catch (err) {
      // console.log(err);
      res.status(500).json({ success: false, error: err });
    }
  },



  //Increments the post raiting by 1
  up: async (req, res) => {

    //The search term
    const _id = req.body;
    //What is being updated
    const update = { $inc: { raiting: +1 } };

    try {
      //Updates hit counter
      await Post.findByIdAndUpdate(_id.id, update).exec();
 ;
    } catch (err) {
      console.log(err);
    }
  },
  
  //decrements the post raiting by 1
  down: async (req, res) => {

    //The search term
    const _id = req.body;
    //What is being updated
    const update = { $inc: { raiting: -1 } };

    try {
      //Updates hit counter
      await Post.findByIdAndUpdate(_id.id, update).exec();
    
    } catch (err) {
      console.log(err);
    }
  },

};
