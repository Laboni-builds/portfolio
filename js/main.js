// Theme toggle. The system preference applies by default (see CSS);
// a manual choice is stored and overrides it.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  var mq = window.matchMedia("(prefers-color-scheme: dark)");

  function current() {
    return root.getAttribute("data-theme") || (mq.matches ? "dark" : "light");
  }
  function label() {
    var dark = current() === "dark";
    btn.textContent = dark ? "Light mode" : "Dark mode";
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    label();
  });
  mq.addEventListener && mq.addEventListener("change", label);
  label();

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
