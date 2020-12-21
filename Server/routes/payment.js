const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const verifyToken = require("../middlewares/verify-token");
const Order = require("../models/order");

//Credit Card Payment
router.post("/paymentCard", verifyToken, (req, res) => {
  let totalPrice = Math.round(req.body.totalPrice * 100); //in order we get the full payment from stripe we have to multiply the amount with 100 its a common rulle for stripe, always multiply the totalprice with 100
  stripe.customers
    .create({
      //This creates a new customer in stripe with the email address of the user
      email: req.decoded.email,
    })
    .then((customer) => {
      //if the new customer was created then call this promise
      return stripe.customers.createSource(customer.id, {
        //sets the source of the payment in our case (for test) it will be a visa card payment
        source: "tok_visa",
      });
    })
    .then((source) => {
      return stripe.charges.create({
        //
        amount: totalPrice,
        currency: "eur",
        customer: source.customer,
      });
    })
    .then(async (charge) => {
      let order = new Order();
      let cart = req.body.cart;

      cart.map((product) => {
        if (product.hasOwnProperty("flavor")) {
          order.product.push({
            productIDFlavor: product._id,
            quantity: parseInt(product.quantity),
            price: product.price,
          });
        } else if (product.hasOwnProperty("drink")) {
          order.product.push({
            productIDDrink: product._id,
            quantity: parseInt(product.quantity),
            price: product.price,
          });
        }
      });
      order.buyer = req.decoded._id;
      await order.save();

      res.json({
        success: true,
        message: "Successfully payed",
      });
    })
    .catch((err) => {
      res.status(500).json({
        // if error then print this and get status 500
        success: false,
        message: err.message,
      });
    });
});

//Sofort payment
router.post("/paymentSofort", verifyToken, (req, res) => {
  let totalPrice = req.body.totalPrice * 100; //in order we get the full payment from stripe we have to multiply the amount with 100 its a common rulle for stripe, always multiply the totalprice with 100
  return stripe.paymentIntents
    .create({
      amount: totalPrice,
      currency: "eur",
      payment_method_types: ["sofort"],
    })
    .then((paymentIntent) => {
      res.json({
        paymentIntent: paymentIntent,
        success: true,
      });
    })
    .then(async (charge) => {
      let order = new Order();
      let cart = req.body.cart;
      console.log(cart);
      cart.map((product) => {
        if (product.hasOwnProperty("flavor")) {
          order.product.push({
            productIDFlavor: product._id,
            quantity: parseInt(product.quantity),
            price: product.price,
          });
        } else if (product.hasOwnProperty("drink")) {
          order.product.push({
            productIDDrink: product._id,
            quantity: parseInt(product.quantity),
            price: product.price,
          });
        }
      });
      order.buyer = req.decoded._id;
      await order.save();
    })
    .catch((err) => {
      res.status(500).json({
        // if error then print this and get status 500
        success: false,
        message: err.message,
      });
    });
});

module.exports = router;
