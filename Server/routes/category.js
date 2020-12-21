const router = require("express").Router();
const Category = require("../models/category.js");

router.post("/category", async (req, res) => {
  try {
    let category = new Category();
    category.type = req.body.type;

    await category.save(); // if all the data is correctly initialized the save the data to the Database

    res.json({
      // if success then print this
      success: true,
      message: "Successfully saved",
    });
  } catch (err) {
    res.status(500).json({
      // if error then print this and get status 500
      success: false,
      message: err.message,
    });
  }
});

router.get("/categories", async (req, res) => {
  try {
    let categories = await Category.find();

    res.json({
      // if success then print this
      succes: true,
      categories: categories,
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
