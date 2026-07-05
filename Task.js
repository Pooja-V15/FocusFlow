const mongoose = require("mongoose");

const ChecklistSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false }
}, { _id: false });

const TaskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: String,
  category: { type: String, default: "Study" },
  labels: [{ type: String }],
  priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
  attachments: [{ name: String, url: String }],
  checklist: [ChecklistSchema],
  progress: { type: Number, min: 0, max: 100, default: 0 },
  dueDate: Date,
  reminderAt: Date,
  completed: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
