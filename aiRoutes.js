const router = require("express").Router();
const ai = require("../controllers/aiController");

router.post("/daily-schedule", ai.dailySchedule);
router.post("/prioritize", ai.prioritizeTasks);
router.get("/suggestions", ai.suggestions);
router.post("/weekly-planner", ai.dailySchedule);

module.exports = router;
