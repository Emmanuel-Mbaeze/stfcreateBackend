const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./Connect/Connect");
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", require("./router/Router"));
app.use("/api/book", require("./router/bookingrouter"));
app.use("/api/content", require("./router/contentrouter"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "stfcreates" });
});

app.listen(port, () => {
  console.log("connecting to server ...!");
});
