const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ["task", "pomodoro", "deadline", "goal", "achievement"], default: "goal" },
  read: { type: Boolean, default: false },
  scheduledFor: Date
}, { timestamps: true });

module.exports = mongoose.model("Notification", NotificationSchema);
