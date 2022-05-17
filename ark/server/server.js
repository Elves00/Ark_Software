require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const cors = require("cors");

//Creates links to model controllers
const users = require("./controllers/userController");
const cards = require("./controllers/cardController");
const pages = require("./controllers/pageController");
const posts = require("./controllers/postController")

const connectDB = require("./db/conn");
const { protect } = require("./middleware/auth");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/forumPage", protect, users.getAccess);
app.get("/profilePage", protect, users.getOne);

app.post("/register", users.createOne);
app.post("/createCard", cards.createOne);
//Find a raid
app.post("/findRaid", cards.findRaid)
app.post("/searchRaid", cards.findRaidTier)
//Find a dungeon
app.post("/findDungeon", cards.findDungeon)
app.post("/searchDungeon", cards.findDungeonTier)

//Get posts
app.post("/getPosts",posts.get)

app.post("/login", users.findOne);
app.patch("/editProfile", protect, users.updateOne);
app.delete("/deleteProfile", protect, users.deleteOne);


//Increments page views by 1
app.post("/hit", cards.hit);

//Fetch a card
app.get("/fetchCard", cards.get);

//Fetch a card 
app.get("/fetchPage", pages.get);

//Fetch a User
app.get("/fetchUser", users.get);

// perform a database connection when server starts
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
