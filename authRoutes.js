const router = require("express").Router();
const controller = require("../controllers/authController");
const { protect } = require("../middleware/auth");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/logout", protect, controller.logout);
router.post("/forgot-password", controller.forgotPassword);
router.post("/refresh-token", protect, controller.refreshToken);

module.exports = router;
