const $modalButton = document.querySelector('#modal-button');
const $noButton = document.querySelector('#no-button');
const $modalContainer = document.querySelector('.modal-container.hidden');

$modalButton.addEventListener('click', () => {
  $modalContainer.classList.remove('hidden');
});

$noButton.addEventListener('click', () => {
  $modalContainer.classList.add('hidden');
});
