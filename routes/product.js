const express = require("express");
const {
  getProduct,
  createProduct,
  searchbyIndex,
} = require("../contollers/product.js");
const router = express.Router();

router.route("/").get(getProduct).post(createProduct);

module.exports = router;
