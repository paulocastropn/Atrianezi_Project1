const express = require("express");
const router = express.Router();
const Collection = require("../models/collection");
const AuthenticationMiddleware = require("../extensions/authentication");

// GET /Courses/
router.get("/", async (req, res, next) => {
  let collections = await Collection.find().sort([["name", "ascending"]]); // Use Collection here
  res.render("collections/index", { title: "Our Collections", dataset: collections, user: req.user });
});

// GET /Courses/Add
router.get("/add", AuthenticationMiddleware, (req, res, next) => {
  res.render("collections/add", { title: "Add a new Collection", user: req.user });
});


// POST /Courses/Add
router.post("/add", AuthenticationMiddleware, async (req, res, next) => {
  let newCollection = new Collection({  // Use Collection here
    name: req.body.name,
    code: req.body.code,
  });
  await newCollection.save();
  res.redirect("/collections");
});

module.exports = router;
