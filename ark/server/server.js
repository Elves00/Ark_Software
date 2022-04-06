require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
// get driver connection
const connectDB = require("./db/conn");

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// perform a database connection when server starts
connectDB();

 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});