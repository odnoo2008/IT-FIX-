let generatedCode = "";
let timeLeft = 180;
let timerInterval;

/* 1️⃣ Код илгээх */
function resetPassword() {
  const email = document.getElementById("forgotEmail").value;
  const error = document.getElementById("forgotError");

  if (!email) {
    error.textContent = "Имэйл оруулна уу";
    return;
  }

  error.textContent = "";
  sendCode();

  document.getElementById("emailStep").style.display = "none";
  document.getElementById("codeStep").style.display = "block";
}

/* Код үүсгэх */
function sendCode() {
  generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("📧 Gmail рүү очсон код (demo):", generatedCode);
  startTimer();
}

/* Countdown */
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 180;

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent =
      `⏳ ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2,'0')}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById("timer").textContent = "⛔ Кодын хугацаа дууссан";
    }
  }, 1000);
}

/* 2️⃣ Код шалгах */
function verifyCode() {
  const input = document.getElementById("verifyCode").value;
  const error = document.getElementById("codeError");

  if (input !== generatedCode) {
    error.textContent = "Код буруу байна";
    return;
  }

  clearInterval(timerInterval);
  document.getElementById("codeStep").style.display = "none";
  document.getElementById("passwordStep").style.display = "block";
}

/* Resend */
function resendCode() {
  sendCode();
  alert("📨 Шинэ код илгээгдлээ (console дээр)");
}

/* 3️⃣ Нууц үг хадгалах */
function savePassword() {
  const pass = document.getElementById("newPass").value;
  const confirm = document.getElementById("confirmPass").value;
  const error = document.getElementById("passError");

  if (pass.length < 6) {
    error.textContent = "Нууц үг 6+ тэмдэгттэй";
    return;
  }

  if (pass !== confirm) {
    error.textContent = "Нууц үг таарахгүй байна";
    return;
  }

  alert("✅ Нууц үг амжилттай солигдлоо");
  closeModal("forgotModal");
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}


