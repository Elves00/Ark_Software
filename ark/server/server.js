require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const cors = require("cors");
//Creates links to model controllers
const users = require("./controllers/userController");
const cards = require("./controllers/cardController");
const connectDB = require("./db/conn");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

//Allow post method for these paths?? using model schemas?
app.post("/register", users.createOne);
app.post("/createCard", cards.createOne);
app.post("/login", users.findOne);

// perform a database connection when server starts
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
