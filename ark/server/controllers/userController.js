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

  findOne: async (req, res) => {
    const {email, password} = req.body;
   


    if(!email || !password){
      res.status(400).json({success:false, error: "Please provide email and password"})
    }

    try{
      const user = await User.findOne({email}).select("+password")
      if(!user){
      res.status(404).json({success:false, error: "Invalid credentials!"});
    }

    const isMatch = await user.matchPassword(password);

    if(!isMatch){
      res.status(404).json({success:false, error: "Invalid password!"});
    }

    res.status(200).json({
      success:true,
      token: "ogweoifnweiofbw"
    });
    } catch (err){
      console.log(err);
      // res.status(500).json({success:false, error: err.message});
    }
  }

};
