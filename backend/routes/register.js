const express = require("express");
const router = express.Router();
const registerController = require("../controller/register");

// Routes
router.post("/", registerController.register);

module.exports = router;
