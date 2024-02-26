const productRouter = require("./routes/product.js");

const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/v1/products", productRouter);
module.exports = app;
