const donateText = `우리의 글로벌 기부 생태계는
적절하고 급진적이며 광범위 합니다.`;
const resourceText = `러쉬의 선한 영향력보고서`;

const speed = 60;

function typeWriter(targetId, text, callback) {
    let i = 0;
    const element = document.getElementById(targetId);

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            if (callback) callback();
        }
    }
    typing();
}

window.onload = function() {
    const donateContainer = document.querySelector(".campaign_container.donate");
    const resourceContainer = document.querySelector(".campaign_container.resource");

    let donateStarted = false;
    let resourceStarted = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('donate') && !donateStarted) {
                    donateStarted = true; 
                    entry.target.classList.add('visible');
                    typeWriter("donate-typewriter", donateText);
                } 
                if (entry.target.classList.contains('resource') && !resourceStarted) {
                    resourceStarted = true;  
                    entry.target.classList.add('visible');
                    typeWriter("resource-typewriter", resourceText);
                }
            }
        })
    }, {
        threshold: 0.5
    })
    observer.observe(donateContainer);
    observer.observe(resourceContainer);
}
