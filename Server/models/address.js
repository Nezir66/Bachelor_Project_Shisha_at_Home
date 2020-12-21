const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  firstName: String,
  lastName: String,
  address: String,
  plz: String,
  city: String,
});

module.exports = mongoose.model("Address", AddressSchema);
