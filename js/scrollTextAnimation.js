const text = "Lush makes effective, handmade products using fresh, organic ingredients, and is always kind to people, and animals."

const container = document.getElementById("main_typewriter");

    const words = text.split(/(\s+)/);

    words.forEach(word => {
      const span = document.createElement('span');
      span.textContent = word;
      container.appendChild(span);
    });

    const spans = container.querySelectorAll('span');
    const totalWords = spans.length;

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) { // 스크롤 내릴 때만 활성화 업데이트
        const containerRect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const scrollY = Math.min(Math.max(0, windowHeight - containerRect.top), windowHeight);
        const scrollRatio = scrollY / windowHeight;

        const activeCount = Math.floor(scrollRatio * totalWords);

        spans.forEach((span, index) => {
          if (index <= activeCount) {
            span.classList.add('active');
          }
        });
      }

      lastScrollY = currentScrollY;
    });