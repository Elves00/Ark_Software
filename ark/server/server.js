require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const users = require("./controllers/userController");
const connectDB = require("./db/conn");
const { protect } = require("./middleware/auth");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/forumPage", protect, users.getAccess);

app.post("/register", users.createOne);
app.post("/login", users.findOne);

// perform a database connection when server starts
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
