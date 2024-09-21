let currentSlide = 0;
const slides = document.querySelectorAll('#slideshow > div');
const totalSlides = slides.length;

function showSlide(index) {
    const slideWidth = -index * 100;
    document.getElementById('slideshow').style.transform = `translateX(${slideWidth}%)`;
}

function changeSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    resetTimer();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

let timer = setInterval(nextSlide, 5000);

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
}