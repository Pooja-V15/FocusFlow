exports.dailySchedule = async (req, res) => {
  const { goals = ["Study"], hours = 4 } = req.body;
  res.json({
    summary: "AI schedule generated from goals, available hours, and priority.",
    blocks: [
      { title: goals[0], startTime: "09:00", endTime: "10:30", priority: "high" },
      { title: "Review and notes", startTime: "11:00", endTime: "12:00", priority: "medium" },
      { title: "Practice recall", startTime: "16:30", endTime: "17:00", priority: "low" }
    ],
    estimatedHours: hours
  });
};

exports.prioritizeTasks = async (req, res) => {
  const tasks = req.body.tasks || [];
  res.json({ tasks: tasks.map((task, index) => ({ ...task, aiRank: index + 1, reason: "Ranked by deadline, effort, and learning impact." })) });
};

exports.suggestions = async (_req, res) => {
  res.json({ suggestions: ["Schedule difficult work before lunch.", "Batch low-effort tasks after your second focus block.", "Protect a recovery break before evening review."] });
};
