const mongoose = require("mongoose");
const User = require("../models/User");

const sendToken = (user, statusCode, res) => {
  const token = user.getToken();
  res.status(statusCode).json({ success: true, token });
};

module.exports = {
  createOne: async (req, res) => {
    const { email, password, confirmpassword } = req.body;

    try {
      const foundUser = await User.findOne({ email });
      if (!foundUser) {
        const details = {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        };
        let newUserDetails = details;
        newUserDetails._id = new mongoose.Types.ObjectId();

        let user = new User(newUserDetails);
        user.save((err) => {
          if (err) {
            return res.status(400).json(err);
          }
          // res.json(user);
          sendToken(user, 201, res);
        });
      } else {
        if (password.length < 6) {
          res.status(500).json({
            success: false,
            error: "Password must be more than 6 characters!",
          });
        }
        if (password !== confirmpassword) {
          res.status(500).json({
            success: false,
            error: "Confirm password did not match!",
          });
        }
        res
          .status(409)
          .json({ success: false, error: "Email or username already exist!" });
      }
    } catch (error) {
      res.status(500);
    }
  },

  findOne: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(400)
        .json({ success: false, error: "Please provide email and password" });
    }

    try {
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        res.status(404).json({ success: false, error: "Invalid credentials!" });
      }

      const isMatch = await user.matchPassword(password);

      if (!isMatch) {
        res.status(404).json({ success: false, error: "Invalid password!" });
      }

      sendToken(user, 200, res);
    } catch (err) {
      console.log(err);
      // res.status(500).json({success:false, error: err.message});
    }
  },

  //API for forum
  getAccess: (req, res, next) => {
    res.status(200).json({ success: true, data: "Hello" });
  },
    
   //Gets user data from mongodb
   get: ((req, res) => {
    //Finds single user
    User.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        //Transform card data into json and set as res
        res.json(data)
      }

    })
  }),

  //Account page
  getOne: (req, res, next) => {
    res.status(200).json({ success: true, data: req.user });
  },

  updateOne: async (req, res) => {
    let user = req.user;
    user = await User.findByIdAndUpdate(user._id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: user });
  },
};
