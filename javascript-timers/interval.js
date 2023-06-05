function countdown() {
  const $countdownDisplay = document.querySelector('.countdown-display');
  const time = Number($countdownDisplay.textContent);

  if (time > 1) {
    $countdownDisplay.textContent = time - 1;
  } else {
    clearInterval(countDown);
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }
}

const countDown = setInterval(countdown, 1000);
