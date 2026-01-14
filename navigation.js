function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

function renderMenu() {
  const role = localStorage.getItem("role");
  const menu = document.getElementById("dynamicMenu");

  if (!menu) return;

  let links = `
    <a href="index.html">Нүүр</a>
    <a href="#">Тусламж</a>
    <a href="#">Түгээмэл асуултууд</a>
    <a href="#">Заавар, зөвлөгөө</a>
  `;

  if (!role) {
    links += `<a href="index.html">Нэвтрэх</a>`;
  } else if (role === "admin") {
    links += `<a href="admin.html">Админ</a>`;
  } else if (role === "employee") {
    links += `<a href="employee.html">Ажилтан</a>`;
  } else if (role === "user") {
    links += `<a href="user.html">Хувь хүн</a>`;
  } else if (role === "organization") {
    links += `<a href="organization.html">Байгууллага</a>`;
  }

  if (role) {
    links += `<a onclick="logout()" style="cursor:pointer">Гарах</a>`;
  }

  menu.innerHTML = links;
}

document.addEventListener("DOMContentLoaded", renderMenu);
