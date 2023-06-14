const $slides = document.querySelectorAll('.slide');
const $leftArrow = document.querySelector('.fa-arrow-left');
const $rightArrow = document.querySelector('.fa-arrow-right');
const $circles = document.querySelectorAll('.fa-circle');
let slideIndex = 0;

function showSlide(index) {
  for (const $slide of $slides) {
    $slide.classList.add('hidden');
  }

  $slides[index].classList.remove('hidden');
}

function showCircle(index) {
  for (const $circle of $circles) {
    $circle.classList.remove('fa-solid');
    $circle.classList.add('fa-regular');
  }

  $circles[index].classList.remove('fa-regular');
  $circles[index].classList.add('fa-solid');
}

function previousSlide() {
  slideIndex = (slideIndex - 1 + $slides.length) % $slides.length;
  showSlide(slideIndex);
  showCircle(slideIndex);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % $slides.length;
  showSlide(slideIndex);
  showCircle(slideIndex);
}

function circleNavigation() {
  for (let i = 0; i < $circles.length; i++) {
    $circles[i].addEventListener('click', (event) => {
      slideIndex = i;
      showSlide(slideIndex);
      showCircle(slideIndex);
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
