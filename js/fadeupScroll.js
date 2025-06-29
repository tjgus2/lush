const fadeupSection = document.querySelectorAll(".campaign_container");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

fadeupSection.forEach(section => observer.observe(section));

// entry.isIntersecting이 true면, 즉 요소가 화면에 20% 이상(옵션의 threshold: 0.2) 보이면,

// 해당 요소(entry.target)에 'visible' 클래스를 추가합니다.

// 'visible' 클래스는 보통 CSS에서 opacity:1 같은 효과를 주어 페이드인 또는 등장 효과를 만듭니다.