document.addEventListener("DOMContentLoaded", () => {
  const productivity = document.getElementById("productivityChart");
  const tasks = document.getElementById("taskChart");
  if (productivity && window.Chart) {
    new Chart(productivity, {
      type: "bar",
      data: { labels: ["Week 1", "Week 2", "Week 3", "Week 4"], datasets: [{ label: "Score", data: [72, 78, 86, 91], backgroundColor: ["#5B5FEF", "#7E8BFF", "#41D6A4", "#FFD166"], borderRadius: 12 }] },
      options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 100 } } }
    });
  }
  if (tasks && window.Chart) {
    new Chart(tasks, {
      type: "doughnut",
      data: { labels: ["Completed", "Pending", "Deferred"], datasets: [{ data: [68, 22, 10], backgroundColor: ["#41D6A4", "#5B5FEF", "#FFD166"], borderWidth: 0 }] },
      options: { cutout: "70%", plugins: { legend: { position: "bottom" } } }
    });
  }
});
