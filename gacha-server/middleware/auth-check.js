const jwt = require("jsonwebtoken");
const { handleError } = require("../utils/helper");

module.exports = (req, res, next) => {
  console.log("request", req.cookies);
  const auth = req.get("Authorization");
  if (!auth) return handleError(res, 401, "Please login.");
  const token = auth.split("")[1];
  try {
    const rawToken = jwt.verify(token, process.env.SECRET);
    if (!rawToken) return handleError(res, 401, "Please login.");
    req.id = rawToken.id;
  } catch (err) {
    return handleError(res, 500, err);
  }
  next();
};
