document.addEventListener("DOMContentLoaded", function () {
  // Dark/Light mode toggle
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;
  const tooltip = document.getElementById('tooltip');

  // Check for saved user preference or use system preference
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  html.classList.toggle("dark", savedTheme === "dark");

  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    const theme = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
});
