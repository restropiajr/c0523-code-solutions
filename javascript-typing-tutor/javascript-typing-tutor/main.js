const $spans = document.querySelectorAll('span');

let currentIndex = 0;
let incorrectCount = 0;

function reset() {
  for (const span of $spans) {
    span.className = '';
    currentIndex = 0;
    incorrectCount = 0;
  }
}

document.addEventListener('keydown', (event) => {
  const currentSpan = $spans[currentIndex];

  if (currentSpan.textContent === event.key) {
    currentSpan.className = 'correct';
    if (currentIndex < $spans.length - 1) {
      $spans[currentIndex + 1].className = 'default';
    }
    currentIndex++;
  } else {
    currentSpan.className = 'incorrect';
    incorrectCount++;
  }

  if (currentIndex > $spans.length - 1) {
    alert(
      `You incorrectly typed ${incorrectCount} letters. Your typing accuracy is: ${Math.ceil(
        100 - (incorrectCount / $spans.length) * 100
      )}%`
    );

    const playAgain = confirm('Do you want to play again?');
    if (playAgain) {
      reset();
    }
  }
});
