const express = require("express");
const cors = require("cors");
const verifiedEmail = require("./Connect/sendMail");
require("dotenv").config();
require("./Connect/Connect");
const port = process.env.PORT || 9091;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", require("./Router/Router"));
app.use("/api/book", require("./Router/bookingrouter"));
app.use("/api/content", require("./Router/contentrouter"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "stfcreates" });
});
app.get("/view", (req, res) => {
  const { email } = req.body;
  verifiedEmail(email).then((result) => {
    console.log(result).catch((error) => {
      console.log(error.message);
    });
  });
  res.status(200).json({ message: "stfcreates mail access" });
});

app.listen(port, () => {
  console.log("connecting to server ...!");
});

module.exports = app;
