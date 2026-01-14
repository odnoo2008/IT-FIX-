const API_URL = "http://localhost:3000/api";

async function apiRequest(path, method = "GET", data = null) {
  const token = localStorage.getItem("token");

  const res = await fetch(API_URL + path, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": token ? `Bearer ${token}` : ""
    },
    body: data ? JSON.stringify(data) : null
  });

  return res.json();
}
