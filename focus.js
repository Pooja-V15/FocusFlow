let timerSeconds = 25 * 60;
let timerInitial = timerSeconds;
let timerHandle;

function renderTimer() {
  const value = document.querySelector("[data-timer-value]");
  const ring = document.querySelector(".timer-ring");
  const mins = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const secs = String(timerSeconds % 60).padStart(2, "0");
  if (value) value.textContent = `${mins}:${secs}`;
  if (ring) {
    const angle = 360 - (timerSeconds / timerInitial) * 360;
    ring.style.background = `conic-gradient(var(--primary) 0deg, var(--primary-2) ${angle}deg, rgba(91,95,239,.13) ${angle}deg)`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimer();
  document.querySelectorAll("[data-preset]").forEach((button) => button.addEventListener("click", () => {
    timerSeconds = Number(button.dataset.preset) * 60;
    timerInitial = timerSeconds;
    clearInterval(timerHandle);
    renderTimer();
  }));
  document.querySelector("[data-start]")?.addEventListener("click", () => {
    clearInterval(timerHandle);
    timerHandle = setInterval(() => {
      timerSeconds = Math.max(0, timerSeconds - 1);
      renderTimer();
      if (timerSeconds === 0) {
        clearInterval(timerHandle);
        toast("Focus session complete. Take a mindful break.");
        if ("Notification" in window) Notification.requestPermission().then((p) => p === "granted" && new Notification("FocusFlow", { body: "Pomodoro finished." }));
      }
    }, 1000);
  });
  document.querySelector("[data-pause]")?.addEventListener("click", () => clearInterval(timerHandle));
  document.querySelector("[data-reset]")?.addEventListener("click", () => { clearInterval(timerHandle); timerSeconds = timerInitial; renderTimer(); });
  document.querySelectorAll(".sound-tile").forEach((tile) => tile.addEventListener("click", () => {
    document.querySelectorAll(".sound-tile").forEach((node) => node.classList.remove("active"));
    tile.classList.add("active");
    toast(`${tile.dataset.sound} ambience selected.`);
  }));
});
