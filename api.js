const API_BASE = localStorage.getItem("focusflow_api") || "http://localhost:5000/api";

async function apiRequest(path, options = {}) {
  const token = localStorage.getItem("focusflow_token");
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "Request failed");
  return data;
}
