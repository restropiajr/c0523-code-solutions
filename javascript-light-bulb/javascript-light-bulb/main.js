const $containerState = document.querySelector('.container.turnedOff');
const $circleState = document.querySelector('.circle.turnedOff');

function lightBulbState(event) {
  if (
    $containerState.classList.contains('turnedOff') &&
    $circleState.classList.contains('turnedOff')
  ) {
    $containerState.classList.replace('turnedOff', 'turnedOn');
    $circleState.classList.replace('turnedOff', 'turnedOn');
  } else if (
    $containerState.classList.contains('turnedOn') &&
    $circleState.classList.contains('turnedOn')
  ) {
    $containerState.classList.replace('turnedOn', 'turnedOff');
    $circleState.classList.replace('turnedOn', 'turnedOff');
  }
}

$circleState.addEventListener('click', lightBulbState);
