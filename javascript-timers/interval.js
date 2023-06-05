const $countdownDisplay = document.querySelector('.countdown-display');
let time = Number($countdownDisplay.textContent);

function countdown() {
  if (time > 1) {
    $countdownDisplay.textContent = time - 1;
    time -= 1;
  } else {
    clearInterval(countDown);
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }
}

const countDown = setInterval(countdown, 1000);
