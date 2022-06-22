const mongoose = require("mongoose");
require("dotenv").config();
// const url1 = process.env.URL;
const url = process.env.URLONLINE;
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });
