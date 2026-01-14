
function pauseRequest(btn) {
  const row = btn.closest("tr");
  const status = row.querySelector(".status");

  status.textContent = "Түр зогссон";
  status.className = "status paused";

  btn.outerHTML = `<button class="resume" onclick="resumeRequest(this)">▶ Үргэлжлүүлэх</button>`;
}

function resumeRequest(btn) {
  const row = btn.closest("tr");
  const status = row.querySelector(".status");

  status.textContent = "Идэвхтэй";
  status.className = "status active";

  btn.outerHTML = `<button class="pause" onclick="pauseRequest(this)">⏸ Түр зогсоох</button>`;
}

function cancelRequest(btn) {
  if (!confirm("Та энэ захиалгыг цуцлахдаа итгэлтэй байна уу?")) return;

  const row = btn.closest("tr");
  const status = row.querySelector(".status");

  status.textContent = "Цуцлагдсан";
  status.className = "status cancelled";

  row.querySelectorAll("button").forEach(b => b.remove());
}
// let generatedCode = "";

// /* 1️⃣ Имэйл илгээх */
// function resetPassword() {
//   const email = document.getElementById("forgotEmail").value;
//   const error = document.getElementById("forgotError");

//   if (!email) {
//     error.textContent = "Имэйл оруулна уу";
//     return;
//   }

//   error.textContent = "";

//   // 🔢 6 оронтой код үүсгэх
//   generatedCode = Math.floor(100000 + Math.random() * 900000).toString();

//   console.log("Илгээгдсэн код:", generatedCode); // backend-д бол имэйл явна

//   // UI шилжилт
//   document.getElementById("forgotEmail").style.display = "none";
//   document.querySelector(".modal-box button").style.display = "none";

//   document.getElementById("codeSection").style.display = "block";
// }

// /* 2️⃣ Код шалгах */
// function verifyCode() {
//   const inputCode = document.getElementById("verifyCode").value;
//   const error = document.getElementById("codeError");

//   if (inputCode !== generatedCode) {
//     error.textContent = "Код буруу байна";
//     return;
//   }

//   error.textContent = "";
//   alert("✅ Код зөв! Нууц үг солих хэсэг рүү орно");

//   // энд дараагийн modal / page рүү оруулна
// }

// /* Modal хаах */
// function closeModal(id) {
//   document.getElementById(id).style.display = "none";
// }

