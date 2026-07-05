const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  avatar: String,
  bio: { type: String, default: "Focused learner building a calmer week." },
  goal: { type: String, default: "Exam preparation" },
  xp: { type: Number, default: 0 },
  coins: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  currentStreak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
  badges: [{ type: String }],
  googleId: String
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
