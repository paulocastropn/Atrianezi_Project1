const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  collection: {
    type: mongoose.Schema.Types.ObjectId, // Fixed syntax
    ref: "Collection", // Reference to the Collection model
  },
  stock: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
