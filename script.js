const menu_button = document.querySelector(".menu_button");

//want to toggle "hidden" class from 1. nav links, 2. close icon div, 3. hamburger icon div
menu_button.addEventListener("click", toggleMenu);

function toggleMenu() {
  const elems = document.querySelectorAll(".toggle_visibility");
  elems.forEach(elem => elem.classList.toggle("hidden"));
}

//when clicking any link inside the menu, want the menu to close, only when in mobile - ie. if the menu was open
const menu = document.querySelector(".nav_links");

menu.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === 'a') {
    closeMenu();
  }
});

function closeMenu() {
  if (!menu.classList.contains("hidden")) {
    toggleMenu();
  }
}

//close menu with "x" or if clicking outside - do i want this too?


//toggle dark/light mode