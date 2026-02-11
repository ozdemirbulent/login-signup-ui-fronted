document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const password = document.getElementById("password");
  const repassword = document.getElementById("repassword");
  const alertMessage = document.querySelector(".alertMessage");
  const alertTitle = document.querySelector(".alertTitle");
  const sendBtn = document.querySelector(".send-btn");
  const forgotPwLink = document.getElementById("forgot-password");
  const modal = document.getElementById("modalOverlay");
  const closeModal = document.getElementById("closeModal");
  const modalInput = document.querySelector(".modal-input");
  const closemodal = document.querySelector(".close-modal");
  const cancelBtn = document.querySelector(".cancel-btn");

  cancelBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
  closemodal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (modalInput.value == "") {
      alert("Email adresi boş bırakılamaz.");
      alertTitle.style.color = "red";
      alertMessage.style.display = "flex";
      alertMessage.style.borderColor = "red";
      return;
    } else {
      alert(
        "Şifre sıfırlama talebiniz alınmıştır. Lütfen emailinizi kontrol edin.",
      );
    }
  });

  forgotPwLink.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
    modalInput.focus();
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });

  function resetErrors() {
    password.style.borderColor = "";
    repassword.style.borderColor = "";
    alertMessage.style.display = "none";
  }

  function validateForm() {
    resetErrors();

    if (!form.checkValidity()) {
      alertTitle.textContent = "Lütfen tüm alanları doldurunuz.";
      alertTitle.style.color = "red";
      alertMessage.style.display = "flex";
      alertMessage.style.borderColor = "red";
      return false;
    }

    if (password.value !== repassword.value) {
      alertTitle.textContent = "Şifreler eşleşmiyor.";
      alertTitle.style.color = "red";
      alertMessage.style.display = "flex";
      alertMessage.style.borderColor = "red";
      return false;
    }

    alertTitle.textContent = "Kayıt başarılı!";
    alertTitle.style.color = "green";
    alertMessage.style.display = "flex";
    alertMessage.style.borderColor = "green";
    return true;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
      const user = {
        name: form.name.value,
        surname: form.surname.value,
        email: form.email.value,
      };
      console.log("Kayıt Başarılı:", user);
    }
  });
});
