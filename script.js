// Password visibility toggle
const passwordInput = document.getElementById("password");
const togglePassword = document.querySelector(".toggle-password");

togglePassword.addEventListener("click", function () {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  this.textContent = type === "password" ? "Show" : "Hide";
});

// Instant input validation (simple demo)
const form = document.querySelector(".login-form");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!form.email.value || !form.password.value) {
    errorMessage.textContent = "Please fill out all fields.";
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    // Perform login submission logic here
  }
});
