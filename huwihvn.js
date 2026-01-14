function showSection(id) {
  document.querySelectorAll(".section").forEach(s => {
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

document.getElementById("repairForm")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("✅ Засварын захиалга амжилттай илгээгдлээ");
  e.target.reset();
});

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

// const requests = [
//   {
//     id: 1,
//     name: "Интернэт засвар",
//     type: "Internet",
//     status: "active",
//     date: "2026-01-12"
//   },
//   {
//     id: 2,
//     name: "Компьютер асахгүй",
//     type: "Hardware",
//     status: "paused",
//     date: "2026-01-10"
//   }
// ];

// function renderRequests() {
//   const tbody = document.getElementById("requestList");
//   tbody.innerHTML = "";

//   requests.forEach((r, i) => {
//     tbody.innerHTML += `
//       <tr>
//         <td>${i + 1}</td>
//         <td>${r.name}</td>
//         <td>${r.type}</td>
//         <td><span class="status ${r.status}">${statusText(r.status)}</span></td>
//         <td>${r.date}</td>
//         <td>
//           ${actionButtons(r.id, r.status)}
//         </td>
//       </tr>
//     `;
//   });
// }

// function statusText(status) {
//   if (status === "active") return "Идэвхтэй";
//   if (status === "paused") return "Түр зогссон";
//   return "Цуцлагдсан";
// }

// function actionButtons(id, status) {
//   if (status === "active") {
//     return `
//       <button class="action-btn pause" onclick="pauseRequest(${id})">Түр зогсоох</button>
//       <button class="action-btn cancel" onclick="cancelRequest(${id})">Цуцлах</button>
//     `;
//   }
//   if (status === "paused") {
//     return `
//       <button class="action-btn resume" onclick="resumeRequest(${id})">Үргэлжлүүлэх</button>
//     `;
//   }
//   return "-";
// }

// function pauseRequest(id) {
//   changeStatus(id, "paused");
// }

// function resumeRequest(id) {
//   changeStatus(id, "active");
// }

// function cancelRequest(id) {
//   changeStatus(id, "cancelled");
// }

// function changeStatus(id, newStatus) {
//   const req = requests.find(r => r.id === id);
//   if (req) {
//     req.status = newStatus;
//     renderRequests();
//   }
// }

// renderRequests();

