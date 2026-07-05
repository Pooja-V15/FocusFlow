const mongoose = require("mongoose");

const PlannerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: String,
  endTime: String,
  color: { type: String, default: "#5B5FEF" },
  priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
  recurring: { type: String, enum: ["none", "daily", "weekly", "monthly"], default: "none" },
  notes: String,
  task: { type: mongoose.Schema.Types.ObjectId, ref: "Task" }
}, { timestamps: true });

module.exports = mongoose.model("Planner", PlannerSchema);
