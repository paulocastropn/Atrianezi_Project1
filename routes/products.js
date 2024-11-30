// Naming convention > controllers/routers are plural
// Import express and create router object
const express = require("express");
const router = express.Router();
// Import mongoose model to be used
const Product = require("../models/product");
const Collection = require("../models/collection");
// Moved middleware function to extensions/authentication.js to make it reusable across different routers
const AuthenticationMiddleware = require("../extensions/authentication");

// Configure GET/POST handlers

// Path relative to the one configured in app.js > /projects
// GET /product/
router.get("/", async (req, res, next) => {
  try{
  // retrieve ALL data, and sort by name (descending)
  let products = await Product.find().populate("collection").sort([["name", "descending"]]);
  // render view
  res.render("products/index", {
    title: "Atrianezi",
    dataset: products,
    user: req.user,
  });
} catch (err) {
  next(err); // Handle errors
}
});

// GET /product/add
router.get("/add", AuthenticationMiddleware, async (req, res, next) => {
  let collectionList = await Collection.find().sort([["name", "ascending"]]);
  res.render("products/add", {
    title: "Add a New Piece",
    collection: collectionList, // Renamed to collections
    user: req.user,
  });
});

// POST /product/add
router.post("/add", AuthenticationMiddleware, async (req, res, next) => {
  // use the product module to save data to DB
  let newProduct = new Product({
    name: req.body.name,
    sku: req.body.sku, // Corrected field to sku
    collection: req.body.collection, // Corrected field to collection
    stock: req.body.stock
  });
  await newProduct.save();
  res.redirect("/products");
});

// GET /product/delete/:_id
router.get("/delete/:_id", AuthenticationMiddleware, async (req, res, next) => {
  let productId = req.params._id;
  await Product.findByIdAndRemove({ _id: productId });
  res.redirect("/products");
});

// GET /product/edit/:_id
router.get("/edit/:_id", AuthenticationMiddleware, async (req, res, next) => {
  let productId = req.params._id;
  let productData = await Product.findById(productId);
  let collectionList = await Collection.find().sort([["name", "ascending"]]);
  res.render("products/edit", {
    title: "Edit Product Info", // Changed title to match product
    product: productData, // Changed project to product
    collection: collectionList, // Renamed to collections
    user: req.user,
  });
});

// POST /product/edit/:_id
router.post("/edit/:_id", AuthenticationMiddleware, async (req, res, next) => {
  let productId = req.params._id;
  await Product.findByIdAndUpdate(
    { _id: productId }, // filter to find the product to update
    {
      name: req.body.name,
      sku: req.body.sku, 
      collection: req.body.collection,
      stock: req.body.stock,
    }
  );
  res.redirect("/products");
});

// Export router object
module.exports = router;
