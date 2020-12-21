const router = require("express").Router();
const verifyToken = require("../middlewares/verify-token.js");
const Address = require("../models/address.js");

router.post("/address", verifyToken, async (req, res) => {
  try {
    let address = new Address();
    address.user = req.decoded._id;
    address.firstName = req.body.firstName;
    address.lastName = req.body.lastName;
    address.address = req.body.address;
    address.plz = req.body.plz;
    address.city = req.body.city;

    await address.save(); // if all the data is correctly initialized the save the data to the Database

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

router.get("/address", verifyToken, async (req, res) => {
  try {
    let foundUserAddress = await Address.findOne({
      // find the User with the id "req.decoded._id" and save it in foundUser
      user: req.decoded._id,
    });
    if (foundUserAddress) {
      // if foundUser exists then go in this statement
      res.json({
        success: true,
        userAddress: foundUserAddress,
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

router.put("/address", verifyToken, async (req, res) => {
  try {
    let dataOfUser = await Address.findOne({ user: req.decoded._id });

    if (dataOfUser) {
      if (req.body.firstName) dataOfUser.firstName = req.body.firstName;
      if (req.body.lastName) dataOfUser.lastName = req.body.lastName;
      if (req.body.address) dataOfUser.address = req.body.address;
      if (req.body.plz) dataOfUser.plz = req.body.plz;
      if (req.body.city) dataOfUser.city = req.body.city;

      await dataOfUser.save();

      res.json({
        success: true,
        message: "Successfully updated User data",
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
