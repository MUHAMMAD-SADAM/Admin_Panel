const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth_controller");
router.route("/").post(authControllers.home);
router.route("/reg").post(authControllers.reg);

module.exports = router;
