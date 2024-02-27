const productRouter = require("./routes/product.js");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/products", productRouter);
module.exports = app;
