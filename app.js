const sampleTasks = [
  { title: "Revise calculus limits", category: "Math", priority: "high", done: false },
  { title: "Summarize biology notes", category: "Science", priority: "medium", done: true },
  { title: "Plan essay outline", category: "Writing", priority: "low", done: false }
];

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("focusflow_theme", theme);
}

function initTheme() {
  const saved = localStorage.getItem("focusflow_theme") || "light";
  setTheme(saved);
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  });
}

function initAOS() {
  if (window.AOS) AOS.init({ once: true, duration: 700, offset: 70 });
}

function toast(message, type = "success") {
  const stack = document.querySelector(".toast-stack") || document.body.appendChild(Object.assign(document.createElement("div"), { className: "toast-stack" }));
  const item = document.createElement("div");
  item.className = "glass px-3 py-2 rounded-4 animate__animated animate__fadeInUp";
  item.innerHTML = `<strong class="me-2">${type === "success" ? "Done" : "Heads up"}</strong>${message}`;
  stack.appendChild(item);
  setTimeout(() => item.remove(), 3200);
}

function initSidebar() {
  const sidebar = document.querySelector(".sidebar");
  document.querySelectorAll("[data-sidebar-toggle]").forEach((button) => button.addEventListener("click", () => sidebar?.classList.toggle("open")));
}

function todayLabel() {
  return new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric" }).format(new Date());
}

function bootCommon() {
  initTheme();
  initAOS();
  initSidebar();
  document.querySelectorAll("[data-today]").forEach((node) => { node.textContent = todayLabel(); });
  document.querySelectorAll("[data-demo-action]").forEach((node) => node.addEventListener("click", () => toast(node.dataset.demoAction)));
  const landingChart = document.getElementById("landingChart");
  if (landingChart && window.Chart) {
    new Chart(landingChart, {
      type: "line",
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{ data: [3, 4, 3.5, 5, 6, 4.5, 6.5], borderColor: "#5B5FEF", backgroundColor: "rgba(91,95,239,.12)", fill: true, tension: 0.45 }]
      },
      options: { plugins: { legend: { display: false } }, scales: { y: { display: false }, x: { grid: { display: false } } } }
    });
  }
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

document.addEventListener("DOMContentLoaded", bootCommon);
