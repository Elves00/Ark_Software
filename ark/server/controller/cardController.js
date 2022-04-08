const mongoose = require("mongoose");
const User = require("../models/User");
const Card = require("../models/Card")


const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("moongoose").ObjectId;



module.exports = {
  createOne: (req, res) => {
    let newCard = req.body;
    newCard._id = new mongoose.Types.ObjectId();

    let card = new Card(newCard);
    Card.save((err) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.json(user);
    });
  },
};
