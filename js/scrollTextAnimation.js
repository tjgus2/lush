const target = document.getElementById("main_typewriter");
const mainContainer = document.querySelector(".main_container");

window.addEventListener("scroll", () => {
    const sectionTop = mainContainer.offsetTop;
    const sectionHeight = mainContainer.offsetHeight;
    const scrollY = window.scrollY;

    // 현재 메인 섹션 내에서의 스크롤 거리
    const distanceScrolled = scrollY - sectionTop;

    // 메인 섹션 내 스크롤 비율 (0 ~ 1 사이)
    const scrollRatio = Math.min(Math.max(distanceScrolled / sectionHeight, 0), 1);

    const acceleratedRatio = Math.min(scrollRatio * 2.0, 1);

    // 백분율 계산 후 CSS 변수로 적용
    const percent = acceleratedRatio * 100;
    target.style.setProperty('--bg-fill', `${percent}%`);
});