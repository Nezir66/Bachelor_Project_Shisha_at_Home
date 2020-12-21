const router = require("express").Router();
const User = require("../models/user");
const verifyToken = require("../middlewares/verify-token");

const jwt = require("jsonwebtoken");

// Sign Up new User
router.post("/auth/signup", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    // if email or password field is empty then go in this statement
    res.json({
      // as a response we give back a json with succes and message as keys. With this if statement we want from the user to fill out both fields email and password
      success: false,
      message: "Please enter email or password",
    });
  } else {
    // when if Statement is not true then go in this else
    try {
      let newUser = new User(); // a new user with User Schema will created

      newUser.name = req.body.name;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      newUser.firstName = req.body.firstName;
      newUser.lastName = req.body.lastName;
      newUser.address = req.body.address;
      newUser.plz = req.body.plz;
      newUser.city = req.body.city;

      await newUser.save(); // save the newUser to the database
      let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
        // create a new token with the newUser(first the newUser should tranformed in a JSON). In order to access the token from an Middleware or somewhere else we give the token also an private access Key
        expiresIn: 604800, // The access Key is only available for 1 Week
      });

      res.json({
        // if the try was successful then response this JSON Object
        success: true,
        token: token,
        message: "Successfully created a new user",
      });
    } catch (err) {
      res.status(500).json({
        // if error then print this and get status 500
        success: false,
        message: err.message,
      });
    }
  }
});

//update User
router.put("/auth/updateUser", verifyToken, async (req, res) => {
  try {
    let foundUser = await User.findOne({ _id: req.decoded._id });

    if (foundUser) {
      if (req.body.name) foundUser.name = req.body.name;
      if (req.body.email) foundUser.email = req.body.email;
      if (req.body.password) foundUser.password = req.body.password;
      if (req.body.firstName) foundUser.firstName = req.body.firstName;
      if (req.body.lastName) foundUser.city = req.body.city;
      if (req.body.address) foundUser.address = req.body.address;
      if (req.body.plz) foundUser.plz = req.body.plz;
      if (req.body.city) foundUser.city = req.body.city;

      await foundUser.save();

      res.json({
        success: true,
        message: "Successfully updated User",
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

// show Profile

router.get("/auth/user", verifyToken, async (req, res) => {
  try {
    let foundUser = await User.findOne({
      // find the User with the id "req.decoded._id" and save it in foundUser
      _id: req.decoded._id,
    });
    if (foundUser) {
      // if foundUser exists then go in this statement
      res.json({
        success: true,
        user: foundUser,
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

//Login User
router.post("/auth/login", async (req, res) => {
  try {
    let foundUser = await User.findOne({ email: req.body.email });

    if (!foundUser) {
      res.status(404).json({
        // if no matching email than status code 404 and this json response
        success: false,
        message: "Authentication failed, User not found",
      });
    } else {
      if (foundUser.comparePassword(req.body.password)) {
        let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
          expiresIn: 604800, // 1 Week
        });
        res.json({
          success: true,
          token: token,
        });
      } else {
        res.status(404).json({
          // if no matching email than status code 404 and this json response
          success: false,
          message: "Authentication failed, wrong password",
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      // if error then print this and get status 500
      success: false,
      message: err.message,
    });
  }
});

//Delete a User
router.delete("/auth/deleteUser", verifyToken, async (req, res) => {
  try {
    let deletedUser = await User.findOneAndDelete({
      // 'findOneAndDelete' will be used to find one single Document and delete it from the Database
      _id: req.decoded._id, // The id parameter searches for the document with the typed id 'req.params.id'
    });
    if (deletedUser) {
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
