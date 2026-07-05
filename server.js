require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db");
const { protect } = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "*", credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => res.json({ status: "ok", app: "FocusFlow" }));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", protect, require("./routes/tasksRoutes"));
app.use("/api/planner", protect, require("./routes/plannerRoutes"));
app.use("/api/focus-sessions", protect, require("./routes/sessionRoutes"));
app.use("/api/analytics", protect, require("./routes/analyticsRoutes"));
app.use("/api/profile", protect, require("./routes/profileRoutes"));
app.use("/api/notifications", protect, require("./routes/notificationRoutes"));
app.use("/api/achievements", protect, require("./routes/achievementRoutes"));
app.use("/api/settings", protect, require("./routes/settingsRoutes"));
app.use("/api/ai", protect, require("./routes/aiRoutes"));

app.use((req, res) => res.status(404).json({ message: "Route not found" }));
app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message || "Server error" });
});

connectDB()
  .then(() => app.listen(PORT, () => console.log(`FocusFlow API running on port ${PORT}`)))
  .catch((error) => {
    console.error("MongoDB connection failed", error.message);
    process.exit(1);
  });
