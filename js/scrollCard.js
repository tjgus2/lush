const cards = document.querySelectorAll(".intro_container");

function checkCardsInView() {
    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            card.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkCardsInView);
window.addEventListener('load', checkCardsInView);