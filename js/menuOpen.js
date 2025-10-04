const hamburger = document.querySelector(".hamburger");
const hamContainer = document.querySelector(".header_menu_button");
const headerMenu = document.querySelector(".wrapper");
const mainTypewriter = document.querySelector("#main_typewriter");

let isMenuOpen = false;
hamContainer.addEventListener("click", () => {
  if (!isMenuOpen) {
    hamburger.classList.add("active");
    headerMenu.classList.add("active");
    mainTypewriter.classList.add("hidden");
    document.body.classList.add("lock-scroll");
  } else {
    hamburger.classList.remove("active");
    headerMenu.classList.remove("active");
    mainTypewriter.classList.remove("hidden");
    document.body.classList.remove("lock-scroll");
  }
  isMenuOpen = !isMenuOpen;
});