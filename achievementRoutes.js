const router = require("express").Router();
const Achievement = require("../models/Achievement");
const User = require("../models/User");
const crud = require("../controllers/crudController")(Achievement);

router.get("/", crud.list);
router.post("/", crud.create);
router.get("/leaderboard", async (_req, res) => {
  const users = await User.find().select("name xp coins level currentStreak").sort({ xp: -1 }).limit(20);
  res.json(users);
});
router.delete("/:id", crud.remove);

module.exports = router;
