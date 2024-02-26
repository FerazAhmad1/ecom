const productModel = require("../models/product.js");

exports.getProduct = async (req, res) => {
  try {
    const { SKU, quantity, discount } = req.query;

    console.log(SKU, quantity, discount);

    const products = await productModel.aggregate([
      {
        $match: {
          SKU: SKU,
        },
      },
      {
        $project: {
          productName: 1,
          brandName: 1,
          SKU: 1,
          listPrice: 1,
          GST: 1,
          offerPrice: {
            $multiply: [
              "$listPrice",
              { $subtract: [1, { $divide: [discount * 1, 100] }] },
            ],
          },
          amount: {
            $multiply: [
              {
                $multiply: [
                  "$listPrice",
                  { $subtract: [1, { $divide: [discount * 1, 100] }] },
                ],
              },
              quantity * 1,
            ],
          },
        },
      },
    ]);

    if (products.length === 0) {
      throw new Error("Product not found.");
    }

    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const {
      productName,
      brandName,
      categoryName,
      attribute1,
      attribute2,
      attribute3,
      units,
      GST,
      SKU,
      image,
      listPrice,
    } = req.body;

    const response = await productModel.create({
      productName,
      brandName,
      categoryName,
      attribute1,
      attribute2,
      attribute3,
      units,
      GST,
      SKU,
      image,
      listPrice,
    });
    res.send("success");
    console.log(response);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
