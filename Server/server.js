const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const flavorRoutes = require("./routes/route_flavor.js");
const drinkRoutes = require("./routes/route_drink.js");
const AuthRoutes = require("./routes/auth.js");
const QuizRoutes = require("./routes/quiz.js");
const addressRoutes = require("./routes/address.js");
const paymentRoutes = require("./routes/payment.js");
const categoryRoutes = require("./routes/category.js");
const ownerRoutes = require("./routes/owner.js");
const allProductsRoutes = require("./routes/allProducts.js");
const cors = require("cors");

const app = express();

dotenv.config();

app.use(cors());

//Database Configuration
mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true }, // We are connecting with the Database. The link with which we connect to the Database is stored in the env file and can be accesed wit "process.env.DATABASE"
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to the Database");
    }
  }
);
//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes Configuration
app.use("/Shisha@home", flavorRoutes);
app.use("/Shisha@home", drinkRoutes);
app.use("/Shisha@home", AuthRoutes);
app.use("/Shisha@home", QuizRoutes);
app.use("/Shisha@home", paymentRoutes);
app.use("/Shisha@home", addressRoutes);
app.use("/Shisha@home", categoryRoutes);
app.use("/Shisha@home", ownerRoutes);
app.use("/Shisha@home", allProductsRoutes);

//Creating Server and listening to port 8080
app.listen(3000);
