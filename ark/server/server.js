require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const Post = require ("./models/post.js");

//Creates links to model controllers
const users = require("./controllers/userController");
const cards = require("./controllers/cardController");
const pages = require("./controllers/pageController");

const connectDB = require("./db/conn");
const { protect } = require("./middleware/auth");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get("/forumPage", protect, users.getAccess);
app.get("/profilePage", protect, users.getOne);

app.post("/register", users.createOne);
app.post("/createCard", cards.createOne);
app.post("/login", users.findOne);
app.patch("/editProfile", protect, users.updateOne);
app.delete("/deleteProfile", protect, users.deleteOne);

//Increments page views by 1
app.post("/hit", cards.hit);

//Fetch a card
app.get("/fetchCard", cards.get);

//Fetch a card 
app.get("/fetchPage",pages.get);
//
app.get("fetchPageBlock",pages.getBlock);

//Fetch a User
app.get("/fetchUser", users.get);

//For uploading images
app.use("/uploads", async (req, res, next) => {
  const body = req.body;
  try {
    const newImage = await Post.create(body);
    newImage.save();
    res.status(201).json({message: "new image uploaded", createdPost: newImage});
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
});

// perform a database connection when server starts
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
