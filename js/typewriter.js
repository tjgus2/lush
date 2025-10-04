const donateText = `우리의 글로벌 기부 생태계는
적절하고 급진적이며 광범위 합니다.`;
const resourceText = `러쉬의 선한 영향력보고서`;
const speed = 60;

function typeWriter(targetId, text) {
    let i = 0;
    const element = document.getElementById(targetId);
    element.innerHTML = "";

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

window.onload = function () {
    const donateContainer = document.querySelector(".campaign_container.donate");
    const resourceContainer = document.querySelector(".campaign_container.resource");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const isVisible = entry.isIntersecting;
            const isDonate = entry.target.classList.contains("donate");
            const isResource = entry.target.classList.contains("resource");

            if (isVisible) {
                // 페이드인 효과 재실행
                entry.target.classList.add("visible");

                // 타이핑 효과 재실행
                if (isDonate) {
                    typeWriter("donate-typewriter", donateText);
                } else if (isResource) {
                    typeWriter("resource-typewriter", resourceText);
                }
            } else {
                // 화면에서 벗어났을 때 초기화
                entry.target.classList.remove("visible");

                if (isDonate) {
                    document.getElementById("donate-typewriter").innerHTML = "";
                } else if (isResource) {
                    document.getElementById("resource-typewriter").innerHTML = "";
                }
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(donateContainer);
    observer.observe(resourceContainer);
}