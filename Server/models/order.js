const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  buyer: { type: Schema.Types.ObjectId, ref: "User" },
  payment: String,
  product: [
    {
      productIDFlavor: { type: Schema.Types.ObjectId, ref: "Flavor" },
      productIDDrink: { type: Schema.Types.ObjectId, ref: "Drink" },
      productIDHookah: Number,
      productIDCoal: Number,
      quantity: Number,
      price: Number,
    },
  ],
});

module.exports = mongoose.model("Order", OrderSchema);
