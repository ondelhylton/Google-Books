const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  rating: Number,
  publisher: String,
  publishedDate: String,
  description: String,
  thumbnail: String,
  price: Number,
  purchase: String
});

module.exports = mongoose.model("Books", BookSchema);