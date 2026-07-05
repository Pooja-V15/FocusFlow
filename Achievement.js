const mongoose = require("mongoose");

const AchievementSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  description: String,
  icon: { type: String, default: "trophy" },
  rewardCoins: { type: Number, default: 0 },
  unlockedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Achievement", AchievementSchema);
