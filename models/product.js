// const mongoose = require("mongoose");
// const Product = require("../models/product");


// const productSchema = new mongoose.Schema({
//     name: String,
//     image: String,
//     countInStock: {
//       type: Number,
//       required: true,
//     }
//   })
   
// exports.Product = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  countInStock: {
          type: Number,
          required: true,
        }
  // Add other fields as needed
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
