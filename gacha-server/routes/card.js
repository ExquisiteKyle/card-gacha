const express = require("express");

const router = express.Router();
const cardsController = require("../controllers/card");

const authCheck = require("../middleware/auth-check");

router.get("/get-all-cards", authCheck, cardsController.getAllCards);
router.get("/get-card", authCheck, cardsController.getCard);
router.post("/add-card", authCheck, cardsController.addCard);
router.delete("/delete-cards", authCheck, cardsController.deleteCards);
router.post("/add-test-data", authCheck, cardsController.addTestData);

module.exports = router;
