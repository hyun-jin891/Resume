const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const printBtn = document.getElementById("print-btn");
const yearEl = document.getElementById("year");

const savedTheme = localStorage.getItem("resume-theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}

themeToggle?.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("resume-theme", next);
});

printBtn?.addEventListener("click", () => window.print());

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
