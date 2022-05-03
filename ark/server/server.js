require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const cors = require("cors");
//Creates links to model controllers
const users = require("./controllers/userController");
const cards = require("./controllers/cardController");
const connectDB = require("./db/conn");
const { protect } = require("./middleware/auth");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/forumPage", protect, users.getAccess);
app.get("/accountPage", protect, users.getOne);

// //These are to track sessions to follow who is logged in
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(require("express-session")({    
//   secret:"Hello World, this is a session",    
//   resave: false,    
//   saveUninitialized: false
// }));
// passport.use(new LocalStrategy(users.authenticate()));
// passport.serializeUser(users.serializeUser());
// passport.deserializeUser(users.deserializeUser());

//Allow post method for these paths?? using model schemas?
app.post("/register", users.createOne);
app.post("/createCard", cards.createOne);
app.post("/login", users.findOne);
app.patch("/editProfile", protect, users.updateOne);

//Fetch a card 
app.get("/fetchCard",cards.get);

//Fetch a User
app.get("/fetchUser",users.get);

// perform a database connection when server starts
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
