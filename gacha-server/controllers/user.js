const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { handleError } = require("../utils/helper");

const findUser = (email) => User.findOne({ where: { email } });

const verifyLogin = (res, user, passwordInput) =>
  bcrypt
    .compare(passwordInput, user.password)
    .then((matched) => {
      if (!matched) return handleError(res, 401, "Invalid credentials");
      return res.status(200).json({
        message: "Success",
      });
    })
    .catch((err) => handleError(res, 500, err));

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  findUser(email)
    .then((user) => {
      if (!user) return handleError(res, 401, "Invalid credentials");
      verifyLogin(res, user, password);
    })
    .catch((err) => handleError(res, 500, err));
};

exports.register = (req, res, next) => {
  const { email, username, password } = req.body;
  findUser(email).then((user) => {
    if (user) {
      return handleError(
        res,
        401,
        "An account associated with this email already exists."
      );
    }
    bcrypt
      .hash(password, 12)
      .then((hashedPassword) =>
        User.create({
          email,
          username,
          password: hashedPassword,
        })
      )
      .then((result) => {
        res.status(200).json({ message: "Success" });
      })
      .catch((err) => handleError(res, 500, err));
  });
};

exports.logOut = (req, res, next) => {
  req.session.destroy(() => res.status(200).send());
};
