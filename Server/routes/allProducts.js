const router = require("express").Router();
const Owner = require("../models/owner.js");
const Category = require("../models/category.js");
const Product = require("../models/flavor.js");

router.get("/allProducts", async (req, res) => {
  try {
    let products = await Product.find();
    let categories = await Category.find();
    let owners = await Owner.find();

    res.json({
      // if success then print this
      succes: true,
      products: products,
      categories: categories,
      owners: owners,
    });
  } catch (err) {
    res.status(500).json({
      // if error then print this and get status 500
      success: false,
      message: err.message,
    });
  }
});
module.exports = router;
