const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res) => res.json(req.user));
router.put("/", async (req, res) => {
  const allowed = ["name", "avatar", "bio", "goal"];
  const update = {};
  allowed.forEach((key) => {
    if (req.body[key] !== undefined) update[key] = req.body[key];
  });
  const user = await User.findByIdAndUpdate(req.user._id, update, { new: true }).select("-password");
  res.json(user);
});

module.exports = router;
