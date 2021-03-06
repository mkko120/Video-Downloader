const express = require('express');
const app = express();
const path = require("path");

const fs = require('fs');
const ytdl = require('ytdl-core');

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen("3000", () => {
  console.log("Server started!");
});
