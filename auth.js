// let selectedRole = null;

// function selectRole(role) {
//     selectedRole = role;

//     document.querySelectorAll('.role-select button')
//         .forEach(btn => btn.classList.remove('active'));

//     event.target.classList.add('active');

//     const textMap = {
//         PERSON: '👤 Хувь хүнээр нэвтрэх',
//         ORGANIZATION: '🏢 Байгууллагаар нэвтрэх',
//         EMPLOYEE: '🛠️ Ажилтнаар нэвтрэх',
//         ADMIN: '👑 Админаар нэвтрэх'
//     };

//     document.getElementById('selectedRoleText').innerText = textMap[role];
// }

// function login() {
//     if (!selectedRole) {
//         alert('Нэвтрэх эрхээ сонгоно уу!');
//         return;
//     }

//     // Түр логик (дараа backend-той холбож бодит болгоно)
//     if (selectedRole === 'PERSON') location.href = 'user.html';
//     if (selectedRole === 'ORGANIZATION') location.href = 'organization.html';
//     if (selectedRole === 'EMPLOYEE') location.href = 'employee.html';
//     if (selectedRole === 'ADMIN') location.href = 'admin.html';
// }
let selectedRole = null;

/* ROLE СОНГОХ */
function selectRole(role) {
  selectedRole = role;

  const roleTextMap = {
    PERSON: "👤 Хувь хүн",
    ORGANIZATION: "🏢 Байгууллага",
    EMPLOYEE: "🛠️ Ажилтан",
    ADMIN: "👑 Админ"
  };

  document.getElementById("selectedRoleText").textContent =
    "Сонгосон эрх: " + roleTextMap[role];
}

/* EMAIL ШАЛГАХ */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* LOGIN */
function login() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const error = document.getElementById("loginError");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  /* 1️⃣ ROLE шалгах */
  if (!selectedRole) {
    error.textContent = "⚠ Нэвтрэх эрхээ сонгоно уу";
    return;
  }

  /* 2️⃣ Хоосон шалгах */
  if (!email || !password) {
    error.textContent = "⚠ Имэйл болон нууц үгээ оруулна уу";
    return;
  }

  /* 3️⃣ EMAIL формат */
  if (!isValidEmail(email)) {
    error.textContent = "❌ Имэйл буруу форматтай байна";
    return;
  }

  /* 4️⃣ DEMO шалгалт (түр) */
  const demoUsers = {
    PERSON: { email: "user@gmail.com", password: "1234", redirect: "user.html" },
    ORGANIZATION: { email: "org@gmail.com", password: "1234", redirect: "organization.html" },
    EMPLOYEE: { email: "staff@gmail.com", password: "1234", redirect: "employee.html" },
    ADMIN: { email: "admin@gmail.com", password: "1234", redirect: "admin.html" }
  };

  const user = demoUsers[selectedRole];

  if (email !== user.email || password !== user.password) {
    error.textContent = "❌ Имэйл эсвэл нууц үг буруу байна";
    return;
  }

  /* 5️⃣ Амжилттай */
  error.textContent = "";
  alert("✅ Амжилттай нэвтэрлээ");

  window.location.href = user.redirect;
}
