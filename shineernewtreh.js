<script>
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function register() {
  alert("✅ Бүртгэл амжилттай! Одоо нэвтэрнэ үү");
  closeModal('registerModal');
}

function resetPassword() {
  alert("📩 Нууц үг сэргээх холбоос имэйл рүү илгээгдлээ");
  closeModal('forgotModal');
}
</script>
