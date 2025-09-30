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