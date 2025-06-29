const text = "We believe in making effective products from fresh, organic fruits and vegetables, the finest essential oils, and safe synthetics. Always handmade, never tested on animals. Lush stands for beauty that's kind to people, animals, and the planet."

const speed = 60;
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("main_typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;