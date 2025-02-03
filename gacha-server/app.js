require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./utils/database");

const userRoutes = require("./routes/user");
const Card = require("./models/card");

// Initializing database.
sequelize
  .sync()
  .then((result) => {
    console.info("Good to go!");
  })
  .catch((err) => console.error(err));

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/user", userRoutes);

app.listen(8080, () => {
  console.log("Server running!");
});
