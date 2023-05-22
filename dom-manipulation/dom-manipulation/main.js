let count = 0;

const $hotBtn = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

function handleClickCount(event) {
  count++;
  $clickCount.textContent = `Click: ${count}`;

  if (count > 0 && count < 4) {
    $hotBtn.className = 'hot-button cold';
  } else if (count > 4 && count < 7) {
    $hotBtn.className = 'hot-button cool';
  } else if (count > 7 && count < 10) {
    $hotBtn.className = 'hot-button tepid';
  } else if (count > 10 && count < 13) {
    $hotBtn.className = 'hot-button warm';
  } else if (count > 13 && count < 16) {
    $hotBtn.className = 'hot-button hot';
  } else if (count > 16) {
    $hotBtn.className = 'hot-button nuclear';
  }
}

$hotBtn.addEventListener('click', handleClickCount);
