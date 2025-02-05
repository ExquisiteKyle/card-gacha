require("dotenv").config();
const express = require("express");
const session = require("express-session");
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
app.use(
  session({
    secret: process.env.SECRET,
    cookie: {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 360000,
    },
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8081");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/user", userRoutes);

app.listen(8080, () => {
  console.log("Server running!");
});
