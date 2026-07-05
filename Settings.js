const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  darkMode: { type: Boolean, default: false },
  notifications: { type: Boolean, default: true },
  smartReminders: { type: Boolean, default: true },
  language: { type: String, default: "English" },
  theme: { type: String, default: "Aurora" },
  shortcuts: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Settings", SettingsSchema);
