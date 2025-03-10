const express = require("express");

const router = express.Router();
const gachaponController = require("../controllers/gachapon");

const authCheck = require("../middleware/auth-check");

router.get("/single", authCheck, gachaponController.gachaponDrawSingle);
router.get("/multi", authCheck, gachaponController.gachaponDrawMulti);

module.exports = router;
