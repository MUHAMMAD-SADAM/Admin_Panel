const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth_controller");
router.route("/").get(authControllers.home);
router.route("/reg").get(authControllers.reg);

module.exports = router;
