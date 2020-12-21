const router = require("express").Router();
const Flavor = require("../models/flavor.js");

// POST-Request for a new Product
router.post("/flavor", async (req, res) => {
  try {
    let shishaFlavor = new Flavor();
    shishaFlavor.flavor = req.body.flavor;
    shishaFlavor.description = req.body.description;
    //shishaFlavor.photo = req.file.location;
    shishaFlavor.price = req.body.price;
    shishaFlavor.quantity = req.body.quantity;

    await shishaFlavor.save(); // if all the data is correctly initialized the save the data to the Database

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
router.get("/flavor", async (req, res) => {
  try {
    let flavors = await Flavor.find();

    res.json({
      // if success then print this
      succes: true,
      flavors: flavors,
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
router.get("/flavor/:id", async (req, res) => {
  try {
    let flavor = await Flavor.findOne({
      // if only one document is requested then 'findOne' will be used instead of 'find'
      _id: req.params.id, // The id parameter searches for the document with the typed id 'req.params.id'
    });

    res.json({
      // if success then print this
      succes: true,
      flavor: flavor,
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
router.put("/flavor/:id", async (req, res) => {
  try {
    let flavor = await Flavor.findOneAndUpdate(
      {
        // 'findOneAndUpdate' will be used to find one single Document and update it with the new content
        _id: req.params.id, // The id parameter searches for the document with the typed id 'req.params.id'
      },
      {
        $set: {
          //with '$set' we update the searched document with the the content in '$set'
          flavor: req.body.flavor,
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
      updatedFlavor: flavor,
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
router.delete("/flavor/:id", async (req, res) => {
  try {
    let deletedFlavor = await Flavor.findOneAndDelete({
      // 'findOneAndDelete' will be used to find one single Document and delete it from the Database
      _id: req.params.id, // The id parameter searches for the document with the typed id 'req.params.id'
    });
    if (deletedFlavor) {
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
