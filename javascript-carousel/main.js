const $slides = document.querySelectorAll('.slide');
const $leftArrow = document.querySelector('.fa-arrow-left');
const $rightArrow = document.querySelector('.fa-arrow-right');
const $circles = document.querySelectorAll('.fa-circle');
let slideIndex = 0;

function showSlide() {
  for (const $slide of $slides) {
    $slide.classList.add('hidden');
  }

  $slides[slideIndex].classList.remove('hidden');
}

function showCircle() {
  for (const $circle of $circles) {
    $circle.classList.remove('fa-solid');
    $circle.classList.add('fa-regular');
  }

  $circles[slideIndex].classList.remove('fa-regular');
  $circles[slideIndex].classList.add('fa-solid');
}

function previousSlide() {
  slideIndex = (slideIndex - 1 + $slides.length) % $slides.length;
  showSlide();
  showCircle();
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % $slides.length;
  showSlide();
  showCircle();
}

function circleNavigation() {
  for (let i = 0; i < $circles.length; i++) {
    $circles[i].addEventListener('click', (event) => {
      slideIndex = i;
      showSlide();
      showCircle();
    });
  }
}

$leftArrow.addEventListener('click', previousSlide);
$rightArrow.addEventListener('click', nextSlide);
circleNavigation();

function startSlideShow() {
  setInterval(nextSlide, 3000);
}

startSlideShow();
