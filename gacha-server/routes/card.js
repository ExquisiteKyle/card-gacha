const express = require("express");

const router = express.Router();
const cardsController = require("../controllers/card");

const authCheck = require("../middleware/auth-check");

router.get("/get-all-cards", authCheck, cardsController.getAllCards);
router.get("/get-card", authCheck, cardsController.getCard);
router.post("/add-card", authCheck, (req, res, next) => {});

module.exports = router;
