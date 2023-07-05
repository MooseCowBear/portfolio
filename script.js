const menuButton = document.querySelector(".menu_button");
menuButton.addEventListener("click", toggleMenu);

//when clicking any link inside the menu, want the menu to close
const menu = document.querySelector(".nav_links");
menu.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === 'a') {
    closeMenu();
  }
});

//toggle dark/light mode
const themeButton = document.querySelector(".theme");
themeButton.addEventListener("click", toggleTheme);

function toggleMenu() {
  const elems = document.querySelectorAll(".toggle_visibility");
  elems.forEach(elem => elem.classList.toggle("hidden"));
}

function closeMenu() {
  if (!menu.classList.contains("hidden")) {
    toggleMenu();
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
}