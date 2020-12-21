const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  type: { type: String, unique: true, required: true }, //unique means that the category name can only be used once
});

module.exports = mongoose.model("Category", CategorySchema);
