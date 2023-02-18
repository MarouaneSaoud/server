const express = require("express");
const router = express.Router();
const catalogueController = require("../controllers/catalogue.controller");

router.get("/", catalogueController.getCategories);
router.get("/:id", catalogueController.ge);

module.exports = router;
