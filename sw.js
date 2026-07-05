const CACHE_NAME = "focusflow-v1";
const ASSETS = [
  "index.html",
  "login.html",
  "register.html",
  "dashboard.html",
  "planner.html",
  "focus.html",
  "tasks.html",
  "analytics.html",
  "profile.html",
  "settings.html",
  "css/style.css",
  "js/app.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
