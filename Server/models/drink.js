const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: "Category" }, // we make a reference to Category
  owner: { type: Schema.Types.ObjectId, ref: "Owner" }, // we make a reference to Owner
  drink: String,
  description: String,
  quantity: Number,
  price: Number,
  rating: [Number],
});

module.exports = mongoose.model("Drink", DrinkSchema);
