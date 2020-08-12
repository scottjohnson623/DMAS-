// server/app.js
const express = require("express");
const path = require("path");
const db = require("./knex.js");
const app = express();
// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/lastid", async (req, res) => {
  let id = await db.select("id").table("art").orderBy("id", "desc").limit(1);
  res.json(id[0].id);
});
app.post("/art", async (req, res) => {
  let user_id = 1;
  await db("art").insert({ user_id });
  res.redirect("/");
});

app.get("/ratings/", async (req, res) => {
  let id = req.params.id;
  let rating = await db("ratings")
    .select("art_id")
    .avg("rating")
    .groupBy("art_id")
    .count("art_id");
  res.send(rating);
});
app.post("/rating/:id/:rating", async (req, res) => {
  art_id = req.params.id;
  rating = req.params.rating;
  await db("ratings").insert({ art_id, rating });
  res.send("ok");
});
// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
