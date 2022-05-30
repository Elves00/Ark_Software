const mongoose = require("mongoose");
const { exists } = require("../models/posts");
const Post = require("../models/posts");


//Card creation
module.exports = {
  createOne: (req, res) => {
    let newPost = req.body;
    newPost._id = new mongoose.Types.ObjectId();

    let post = new Post(newPost);

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

  //Increments a posts raiting
  rait: async (req, res) => {

    //Strip userid and the post id from body.
    const { userId, id, disable, number } = req.body;

    // console.log("user id: " + userId);
    // console.log("Id: " + id);
    // console.log("number: " + number);
    // console.log("disable: " + disable);


    //incrementing the raiting.
    const update = { $inc: { raiting: + number } };

    try {

      const y = await Post.updateOne({ "vote.user_id": userId, "_id": id }, { $set: { "vote.$.rait": disable } }).exec();
      // console.log("number found" + y.matchedCount)
      if (y.matchedCount < 1) {
        console.log("inside here")
        const x = await Post.updateOne({ "_id": id }, { $push: { "vote": { user_id: userId, rait: disable } } });
      }

      await Post.findByIdAndUpdate(id, update).exec();
    } catch (err) {
      console.log(err);
    }

  },

  findOne: async (req, res) => {

    //The search term
    const data = req.body;

    try {
      // console.log("Here");

      const { id, userId } = data;

      // console.log("searching for post:" + id);
      // console.log("searching for vote:" + userId);
      //Search for if the user has voted
      const up = await Post.find({ _id: id, vote: { user_id: userId, rait: 1 } });
      const down = await Post.find({ _id: id, vote: { user_id: userId, rait: -1 } });

      // console.log("id: " + id + " User ID:" + userId + " up: " + up);
      if (up.length > 0) {
        res.json(1);

      }
      else if (down.length > 0) {
        res.json(-1);
      }
      else {
        res.json(0);
      }
    } catch (err) {

    }
  },



  updateOne: async (req, res) => {
    // const { username, aboutMe, characterClass, postImage, following } = req.body;
    let user = req.user;
    user = await Post.findByIdAndUpdate(user._id, req.body, {
      new: true,
    });

    res.status(200).json({ success: true, data: user });
  },


};
