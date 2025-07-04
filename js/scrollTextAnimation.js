const text = "We believe in making effective products from fresh, organic fruits and vegetables, the finest essential oils, and safe synthetics. Always handmade, never tested on animals. Lush stands for beauty that's kind to people, animals, and the planet."
const container = document.getElementById("main_typewriter");

text.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    container.appendChild(span);
});

const spans = container.querySelectorAll('span');
const totalLetters = spans.length;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollRatio = scrollTop / maxScroll;

    const activeCount = Math.floor(scrollRatio * totalLetters);

    spans.forEach((span, index) => {
        if (index <= activeCount) {
            span.classList.add('active');
        }
        else {
            span.classList.remove('active');
        }
    })
})