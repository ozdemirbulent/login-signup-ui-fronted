document.addEventListener("DOMContentLoaded", () => {
  const signInButton = document.getElementById("signIn");
  const signUpButton = document.getElementById("signUp");
  const container = document.getElementById("container");
  const themeButton = document.querySelector(".tema");
  const modalInput = document.querySelector(".modal-input");
  const forgotPwLink = document.getElementById("forgot-password");
  const closeModal = document.getElementById("closeModal");
  const modalOverlay = document.getElementById("modalOverlay");
  const sendbutton = document.querySelector(".send-btn");

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  function alertMessage() {
    if (modalInput && !modalInput.value.trim()) {
      alert("Lütfen Email adresinizi giriniz!");
    } else if (modalInput) {
      alert("İletiniz gönderildi!, Teşekkürler!");
      modalInput.value = "";
    }
  }

  if (sendbutton) sendbutton.addEventListener("click", alertMessage);

  if (signUpButton && container) {
    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });
  }

  if (signInButton && container) {
    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }

  if (forgotPwLink && modalOverlay) {
    forgotPwLink.addEventListener("click", (e) => {
      e.preventDefault();
      modalOverlay.classList.add("active");
    });
  }

  if (closeModal && modalOverlay) {
    closeModal.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }
});
