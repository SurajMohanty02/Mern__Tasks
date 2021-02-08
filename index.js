const express = require("express");
const app = express();
const connect = require("./db");
const contact = require("./ContactRoutes");
require("dotenv").config();

connect();

app.get("/", (req, res) => {
  res.send("hello mern");
});
app.use("/", contact);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Your app is running");
});
