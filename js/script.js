// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  const form       = document.getElementById("messageForm");
  const resultBox  = document.getElementById("result");
  const heroName   = document.getElementById("heroName");
  const menuBtn    = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  /* ===== MOBILE NAV ===== */
  menuBtn?.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  /* ===== FORM VALIDATION & OUTPUT ===== */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const phone   = form.phone.value.trim();
    const gender  = form.gender.value;
    const message = form.message.value.trim();

    // very-simple phone check
    if (phone.replace(/\\D/g, "").length < 8) {
      alert("Phone number must contain at least 8 digits.");
      form.phone.focus();
      return;
    }

    const submittedAt = new Date().toLocaleString();
    resultBox.innerHTML = `
      <strong>Submitted:</strong> ${submittedAt}<br>
      <strong>Name:</strong> ${name}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Phone:</strong> ${phone}<br>
      <strong>Gender:</strong> ${gender}<br>
      <strong>Message:</strong> ${message}
    `;

    // update hero greeting
    heroName.textContent = name || "Guest";

    form.reset();
  });
});