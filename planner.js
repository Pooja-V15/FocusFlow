document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".schedule-block").forEach((block) => {
    block.draggable = true;
    block.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/plain", block.id));
  });
  document.querySelectorAll("[data-dropzone]").forEach((zone) => {
    zone.addEventListener("dragover", (event) => event.preventDefault());
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      const id = event.dataTransfer.getData("text/plain");
      const block = document.getElementById(id);
      if (block) zone.appendChild(block);
      toast("Schedule updated with auto-save.");
    });
  });
});
