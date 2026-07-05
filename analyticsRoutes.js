const router = require("express").Router();
const Analytics = require("../models/Analytics");
const crud = require("../controllers/crudController")(Analytics);

router.get("/", crud.list);
router.post("/", crud.create);
router.get("/summary", async (req, res) => {
  const rows = await Analytics.find({ user: req.user._id }).sort({ date: -1 }).limit(30);
  const totals = rows.reduce((acc, row) => {
    acc.studyHours += row.studyHours;
    acc.tasksCompleted += row.tasksCompleted;
    acc.sessionsCompleted += row.sessionsCompleted;
    acc.focusScore += row.focusScore;
    return acc;
  }, { studyHours: 0, tasksCompleted: 0, sessionsCompleted: 0, focusScore: 0 });
  totals.averageFocusScore = rows.length ? Math.round(totals.focusScore / rows.length) : 0;
  res.json({ totals, rows });
});
router.get("/:id", crud.get);
router.put("/:id", crud.update);
router.delete("/:id", crud.remove);

module.exports = router;
