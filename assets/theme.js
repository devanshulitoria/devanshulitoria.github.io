(function () {
  "use strict";

  var preference = window.matchMedia("(prefers-color-scheme: dark)");
  var savedTheme;
  var themeSwitch;

  try {
    savedTheme = window.localStorage.getItem("theme");
  } catch (error) {}

  if (savedTheme !== "light" && savedTheme !== "dark") {
    savedTheme = null;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeSwitch) {
      themeSwitch.setAttribute("aria-checked", String(theme === "dark"));
    }
  }

  applyTheme(savedTheme || (preference.matches ? "dark" : "light"));

  preference.addEventListener("change", function (event) {
    if (!savedTheme) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    themeSwitch = document.querySelector(".theme-switch");
    if (!themeSwitch) return;

    themeSwitch.setAttribute("aria-checked", String(document.documentElement.getAttribute("data-theme") === "dark"));
    themeSwitch.hidden = false;
    themeSwitch.addEventListener("click", function () {
      savedTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(savedTheme);
      try {
        window.localStorage.setItem("theme", savedTheme);
      } catch (error) {}
    });
  });
})();