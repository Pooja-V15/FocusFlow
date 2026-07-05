const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, default: "Focus session" },
  mode: { type: String, enum: ["25/5", "50/10", "custom"], default: "25/5" },
  durationMinutes: { type: Number, required: true },
  breakMinutes: { type: Number, default: 5 },
  ambientSound: { type: String, default: "Rain" },
  completed: { type: Boolean, default: false },
  startedAt: Date,
  endedAt: Date
}, { timestamps: true });

module.exports = mongoose.model("Session", SessionSchema);
