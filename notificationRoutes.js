const router = require("express").Router();
const Notification = require("../models/Notification");
const crud = require("../controllers/crudController")(Notification);

router.get("/", crud.list);
router.post("/", crud.create);
router.put("/:id/read", async (req, res) => {
  const notification = await Notification.findOneAndUpdate({ _id: req.params.id, user: req.user._id }, { read: true }, { new: true });
  if (!notification) return res.status(404).json({ message: "Not found" });
  res.json(notification);
});
router.delete("/:id", crud.remove);

module.exports = router;
