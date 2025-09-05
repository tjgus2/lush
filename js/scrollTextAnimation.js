const mainContainer = document.querySelector(".main_container");
const hiddenText = document.getElementById("main_typewriter_hidden");

window.addEventListener("scroll", () => {
    const sectionTop = mainContainer.offsetTop;
    const sectionHeight = mainContainer.offsetHeight;
    const scrollY = window.scrollY;

    const distanceScrolled = scrollY - sectionTop;

    const scrollRatio = Math.min(Math.max(distanceScrolled / sectionHeight, 0), 1);

    const percent = scrollRatio * 200;

    hiddenText.style.backgroundSize = `${percent}% 200%`;
});
