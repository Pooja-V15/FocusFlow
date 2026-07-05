const mongoose = require("mongoose");

const AnalyticsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  focusScore: { type: Number, default: 0 },
  studyHours: { type: Number, default: 0 },
  tasksCompleted: { type: Number, default: 0 },
  tasksPending: { type: Number, default: 0 },
  sessionsCompleted: { type: Number, default: 0 },
  goalProgress: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Analytics", AnalyticsSchema);
