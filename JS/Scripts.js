// Mobile Menu Responsive

const mobileBars = document.querySelector(".mobile_bars");
const mainMenu = document.querySelector(".main_menu");

mobileBars.addEventListener("click", () => {
  mainMenu.classList.toggle("open");
});

// Dark Mode or Light Mode

const darkTheme = document.querySelector(".dark_theme");
darkTheme.addEventListener("click", () => {
  darkTheme.querySelector("i").classList.toggle("fa-sun");
  darkTheme.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    darkTheme.querySelector("i").classList.add("fa-sun");
  } else {
    darkTheme.querySelector("i").classList.add("fa-moon");
  }
});
