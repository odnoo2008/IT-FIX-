function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[0-9]{8,}$/.test(phone);
}

/* LOGIN */
function login() {
  const email = email.value.trim();
  const pass = password.value.trim();
  const err = loginError;

  if (!email || !pass) {
    err.textContent = "⚠ Имэйл, нууц үгээ оруулна уу";
    return;
  }

  if (!isValidEmail(email)) {
    err.textContent = "❌ Имэйл буруу форматтай";
    return;
  }

  alert("✅ Амжилттай нэвтэрлээ");
}

/* REGISTER */
function register() {
  if (!regName.value || !regEmail.value || !regPhone.value || !regPass.value || !regPass2.value) {
    regError.textContent = "⚠ Бүх талбарыг бөглөнө үү";
    return;
  }

  if (!isValidEmail(regEmail.value)) {
    regError.textContent = "❌ Имэйл буруу байна";
    return;
  }

  if (!isValidPhone(regPhone.value)) {
    regError.textContent = "❌ Утас буруу байна";
    return;
  }

  if (regPass.value !== regPass2.value) {
    regError.textContent = "❌ Нууц үг таарахгүй";
    return;
  }

  alert("✅ Бүртгэл амжилттай");
  closeModal("registerModal");
}

/* FORGOT */
function resetPassword() {
  if (!forgotEmail.value || !isValidEmail(forgotEmail.value)) {
    forgotError.textContent = "❌ Имэйл зөв оруулна уу";
    return;
  }

  alert("📩 Холбоос илгээгдлээ");
  closeModal("forgotModal");
}
