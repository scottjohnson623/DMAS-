// server/app.js
const express = require("express");
const path = require("path");
const db = require("./knex.js");
const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/", (req, res) => {
  res.send("hello world");
});
// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
