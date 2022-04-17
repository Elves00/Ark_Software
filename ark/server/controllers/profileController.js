const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = {

findOne: async (req, res) => {
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
}
