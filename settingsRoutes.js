const router = require("express").Router();
const Settings = require("../models/Settings");

router.get("/", async (req, res) => {
  const settings = await Settings.findOneAndUpdate({ user: req.user._id }, { $setOnInsert: { user: req.user._id } }, { upsert: true, new: true });
  res.json(settings);
});

router.put("/", async (req, res) => {
  const settings = await Settings.findOneAndUpdate({ user: req.user._id }, req.body, { upsert: true, new: true });
  res.json(settings);
});

module.exports = router;
