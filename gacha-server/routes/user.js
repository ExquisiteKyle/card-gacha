const express = require("express");

const router = express.Router();
const userController = require("../controllers/user");

const authCheck = require("../middleware/auth-check");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logOut", userController.logOut);

module.exports = router;
