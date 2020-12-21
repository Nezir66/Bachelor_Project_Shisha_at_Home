const router = require("express").Router();
const Drink = require("../models/drink.js");
const upload = require("../middlewares/upload-photo.js");

// POST-Request for a new Product
router.post("/drink", async (req, res) => {
  try {
    let selectedDrink = new Drink();
    selectedDrink.drink = req.body.drink;
    selectedDrink.description = req.body.description;
    selectedDrink.price = req.body.price;
    selectedDrink.quantity = req.body.quantity;

    await selectedDrink.save(); // if all the data is correctly initialized the save the data to the Database

    res.json({
      // if success then print this
      status: true,
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

// GET-Request for all Products
router.get("/drink", async (req, res) => {
  try {
    let drinks = await Drink.find();

    res.json({
      // if success then print this
      succes: true,
      drinks: drinks,
    });
  } catch (err) {
    res.status(500).json({
      // if error then print this and get status 500
      success: false,
      message: err.message,
    });
  }
});

// GET-Request fpr a single Product
router.get("/drink/:id", async (req, res) => {
  try {
    let drink = await Drink.findOne({
      // if only one document is requested then 'findOne' will be used instead of 'find'
      _id: req.params.id, // The id parameter searches for the document with the typed id 'req.params.id'
    });

    res.json({
      // if success then print this
      succes: true,
      drink: drink,
    });
  } catch (err) {
    res.status(500).json({
      // if error then print this and get status 500
      success: false,
      message: err.message,
    });
  }
});
// PUT-Request for a single Product
router.put("/drink/:id", async (req, res) => {
  try {
    let drink = await Drink.findOneAndUpdate(
      {
        // 'findOneAndUpdate' will be used to find one single Document and update it with the new content
        _id: req.params.id, // The id parameter searches for the document with the typed id 'req.params.id'
      },
      {
        $set: {
          //with '$set' we update the searched document with the the content in '$set'
          drink: req.body.drink,
          description: req.body.description,
          price: req.body.price,
          quantity: req.body.quantity,
        },
      },
      { upsert: true }
    ); // with upsert we say that if the searched id is not found create a new Object with the content in '$set'

    res.json({
      // if success then print this
      succes: true,
      updatedDrink: drink,
    });
  } catch (err) {
    res.status(500).json({
      // if error then print this and get status 500
      success: false,
      message: err.message,
    });
  }
});

// DELETE-Request for a single Product
router.delete("/drink/:id", async (req, res) => {
  try {
    let deletedDrink = await Drink.findOneAndDelete({
      // 'findOneAndDelete' will be used to find one single Document and delete it from the Database
      _id: req.params.id, // The id parameter searches for the document with the typed id 'req.params.id'
    });
    if (deletedDrink) {
      // if 'deletedProduct' is true then response with the following
      res.json({
        // if success then print this
        status: true,
        message: "Successfully deleted",
      });
    }
  } catch (err) {
    res.status(500).json({
      // if error then print this and get status 500
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
