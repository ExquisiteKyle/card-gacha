exports.handleError = (res, code, err) =>
  res.status(code).json({ message: err.message || err });
