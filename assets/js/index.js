// Darkmode

let darkModeOn = false;
let darkModePreferences = window.localStorage.getItem("dark_theme");

document.addEventListener("DOMContentLoaded", () => {
  // Verify if dark mode settings is saved on local storage
  if (darkModePreferences !== null) {
    // Set preferences accordingly
    shouldDarkMode = darkModePreferences;
    shouldDarkMode === "dark" ? (darkModeOn = true) : (darkModeOn = false);
  } else {
    // Let system decide otherwise
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      darkModeOn = true;
    } else {
      if (document.body.classList.contains("dark-mode")) {
        darkModeOn = true;
      } else {
        darkModeOn = false;
      }
    }
  }

  if (darkModeOn) {
    if (!document.body.classList.contains("dark-mode")) {
      document.body.classList.add("dark-mode");
    }
  } else {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
    }
  }
});

function setDarkTheme() {
  window.localStorage.setItem(
    "dark_theme",
    darkModePreferences === "dark" ? "light" : "dark"
  );
  window.location.reload();
}

// Add my age according to the current date

function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

if (document.getElementById("my-age")) {
  document.getElementById("my-age").innerHTML = calculate_age(
    new Date(1994, 9, 9)
  );
}

// Progress Bar

let processScroll = () => {
  let docElem = document.documentElement,
    docBody = document.body,
    scrollTop = docElem["scrollTop"] || docBody["scrollTop"],
    scrollBottom =
      (docElem["scrollHeight"] || docBody["scrollHeight"]) - window.innerHeight,
    scrollPercent = (scrollTop / scrollBottom) * 100 + "%";

  document
    .getElementById("progress-bar")
    .style.setProperty("--scrollAmount", scrollPercent);
};

document.addEventListener("scroll", processScroll);
