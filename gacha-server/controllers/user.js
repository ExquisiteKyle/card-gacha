const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { handleError } = require("../utils/helper");

const findUser = (email) => User.findOne({ where: { email } });

const generateAuthToken = (id) =>
  jwt.sign(
    {
      id,
    },
    process.env.SECRET,
    { expiresIn: "1h" }
  );

const verifyLogin = (user) =>
  bcrypt
    .compare(password, user.password)
    .then((matched) => {
      if (!matched) return handleError(res, 401, "Invalid credentials");
      const authToken = generateAuthToken(user.id);
      res.status(200).json({
        message: "Success",
        token: authToken,
      });
    })
    .catch((err) => handleError(res, 500, err));

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  findUser(email)
    .then((user) => {
      if (!user) return handleError(res, 401, "Invalid credentials");
      verifyLogin(user);
    })
    .catch((err) => handleError(res, 500, err));
};

exports.register = (req, res, next) => {
  const { email, name, password } = req.body;
  findUser(email).then((user) => {
    if (user.length > 0) {
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
          name,
          password: hashedPassword,
        })
      )
      .then((result) => {
        res.status(200).json({ message: "Success" });
      })
      .catch((err) => handleError(res, 500, err));
  });
};
