const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

app.use(cors());
app.options("*", cors());

//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(authJwt());
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use(errorHandler);

const ordersRoutes = require("./routes/orders");
const productRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const categoryRoutes = require("./routes/categories");

const api = process.env.API_URL;

app.use(`${api}/products`, productRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/categories`, categoryRoutes);
app.use(`${api}/orders`, ordersRoutes);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database connection is ready...");
  })

  .catch((err) => {
    console.log(err);
  });

//server
app.listen(3000, () => {
  console.log("Server started now on port 3000");
  console.log(api); // Move this line here if you want to log the API_URL after it's defined.
});