const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.remove('active');
    slides[nextIndex].classList.add('active');
    currentIndex = nextIndex;
}

// Repetir el cambio de imagen cada 3 segundos
setInterval(nextSlide, 3000);
