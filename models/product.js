const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  attribute1: String,
  attribute2: String,
  attribute3: String,
  units: {
    type: Number,
    default: 0,
  },
  GST: {
    type: Number,
    default: 0,
  },
  SKU: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  image: String,
  listPrice: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
