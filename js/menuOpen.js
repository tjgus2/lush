const hamburger = document.querySelector(".hamburger");
const hamContainer = document.querySelector(".header_menu_button");
const headerMenu = document.querySelector(".header_menu");

const mainTypewriter = document.querySelector("#main_typewriter");

let isMenuOpen = true;
hamContainer.addEventListener("click", () => {
    if (isMenuOpen) {
        hamburger.classList.add('active');
        headerMenu.classList.add('active');
        mainTypewriter.classList.add('hidden');
    }
    else {
        hamburger.classList.remove('active');
        headerMenu.classList.remove('active');
        mainTypewriter.classList.remove('hidden');
    }
    isMenuOpen = !isMenuOpen;
})