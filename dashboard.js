document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("focusflow_user") || '{"name":"Alex Morgan"}');
  document.querySelectorAll("[data-user-name]").forEach((node) => { node.textContent = user.name || "Alex Morgan"; });

  const weekly = document.getElementById("weeklyChart");
  if (weekly && window.Chart) {
    new Chart(weekly, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{ label: "Deep work hours", data: [2.5, 4, 3.2, 5, 4.6, 3.4, 5.5], borderColor: "#5B5FEF", backgroundColor: "rgba(91,95,239,.12)", fill: true, tension: .42 }]
      },
      options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    });
  }
});
