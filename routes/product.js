const express = require("express");
const {
  getProduct,
  createProduct,
  searchbyIndex,
} = require("../contollers/product.js");
const router = express.Router();

router.route("/").get(searchbyIndex).post(createProduct);

module.exports = router;
