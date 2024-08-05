let slideIndices = [0, 0, 0]; // Separate indices for each slider

function changeSlide(direction, sliderIndex) {
    const sliders = document.querySelectorAll('.slider-container');
    const slides = sliders[sliderIndex].querySelector('.slides');
    const totalSlides = sliders[sliderIndex].querySelectorAll('.slide').length;
    const slidesToShow = 4; // Number of slides visible at a time

    slideIndices[sliderIndex] += direction;

    if (slideIndices[sliderIndex] > totalSlides - slidesToShow) {
        slideIndices[sliderIndex] = 0;
    } else if (slideIndices[sliderIndex] < 0) {
        slideIndices[sliderIndex] = totalSlides - slidesToShow;
    }

    const slideWidth = slides.clientWidth / slidesToShow;
    slides.style.transform = `translateX(-${slideIndices[sliderIndex] * slideWidth}px)`;
}
