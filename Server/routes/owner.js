const router = require("express").Router();
const Owner = require("../models/owner.js");
const upload = require("../middlewares/upload-photo.js");

router.post("/owner", upload.single("photo"), async (req, res) => {
  try {
    let owner = new Owner();
    owner.name = req.body.name;
    owner.about = req.body.about;
    owner.photo = req.file.location;

    await owner.save(); // if all the data is correctly initialized the save the data to the Database

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

router.get("/owners", async (req, res) => {
  try {
    let owners = await Owner.find(); // find Owner and save the data of it in the Variable owners

    res.json({
      // if success then print this json
      succes: true,
      owners: owners, // the value of the key owners is the variable owners with the Content of Owner
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
