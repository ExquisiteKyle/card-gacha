const jwt = require("jsonwebtoken");
const { handleError } = require("../utils/helper");

module.exports = (req, res, next) => {
  const session = req.session;
  const expirationDate = new Date(session?.cookie?.expires);
  if (!session || expirationDate < new Date())
    return handleError(res, 401, "Please login.");
  next();
};
