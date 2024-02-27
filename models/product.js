const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    unique: true,
    required: [true, "please provide product Name"],
  },
  brandName: {
    type: String,
    required: [true, "please provide brand Name"],
  },
  categoryName: {
    type: String,
    required: [true, "please provide category Name"],
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
    index: true,
  },
  image: {
    type: String,
    unique: true,
    required: true,
  },
  listPrice: {
    type: Number,
    required: [true, "A product must have listPrice"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
