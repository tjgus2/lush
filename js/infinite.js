window.addEventListener('load', () => {
  const infiniteSlider = document.getElementById('infiniteSlider');
  const sliderContent = document.getElementById('sliderContent');

  const clone = sliderContent.cloneNode(true);
  infiniteSlider.appendChild(clone);

  let position = 0;
  const speed = 1;

  function animate() {
    position -= speed;
    if (Math.abs(position) >= sliderContent.offsetWidth) {
      position = 0;
    }
    infiniteSlider.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
