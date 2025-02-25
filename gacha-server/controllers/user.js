const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { handleError } = require("../utils/helper");

const verifyLogin = (req, res, user, passwordInput) =>
  bcrypt
    .compare(passwordInput, user.password)
    .then((matched) => {
      if (!matched) return handleError(res, 401, "Invalid credentials");
      req.session.regenerate((err) => {
        if (err) next(err);
        req.session.user = req.body.user;
        req.session.save((err) => {
          if (err) return next(err);
          return res.status(200).json({
            message: "Success",
          });
        });
      });
    })
    .catch((err) => handleError(res, 500, err));

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ where: { username } })
    .then((user) => {
      if (!user) return handleError(res, 401, "Invalid credentials");
      verifyLogin(req, res, user, password);
    })
    .catch((err) => handleError(res, 500, err));
};

exports.register = (req, res, next) => {
  const { email, username, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
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
  req.session.user = null;
  req.session.save((err) => {
    if (err) next(err);
    req.session.regenerate((err) => {
      if (err) next(err);
      res.status(200).send();
    });
  });
};
