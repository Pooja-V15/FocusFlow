const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Settings = require("../models/Settings");

function sign(user) {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET || "focusflow_dev_secret", { expiresIn: "7d" });
}

exports.register = async (req, res) => {
  const { name, email, password, goal } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: "Name, email, and password are required" });
  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: "Email is already registered" });
  const hashed = await bcrypt.hash(password, 12);
  const user = await User.create({ name, email, password: hashed, goal, xp: 120, coins: 40, level: 2 });
  await Settings.create({ user: user._id });
  res.status(201).json({ token: sign(user), user: { id: user._id, name: user.name, email: user.email } });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: "Invalid credentials" });
  res.json({ token: sign(user), user: { id: user._id, name: user.name, email: user.email } });
};

exports.logout = async (_req, res) => res.json({ message: "Logged out on client" });
exports.forgotPassword = async (_req, res) => res.json({ message: "Password reset email queued" });
exports.refreshToken = async (req, res) => res.json({ token: sign(req.user) });
