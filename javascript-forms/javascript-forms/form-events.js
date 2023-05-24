function handleFocus(event) {
  console.log("'focus' event was fired.");
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log("'blur' event was fired.");
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('event.target.value:', event.target.value);
}

const $contactInputOne = document.querySelector('#user-name');
const $contactInputTwo = document.querySelector('#user-email');
const $contactTextArea = document.querySelector('#user-message');

$contactInputOne.addEventListener('focus', handleFocus);
$contactInputOne.addEventListener('blur', handleBlur);
$contactInputOne.addEventListener('input', handleInput);

$contactInputTwo.addEventListener('focus', handleFocus);
$contactInputTwo.addEventListener('blur', handleBlur);
$contactInputTwo.addEventListener('input', handleInput);

$contactTextArea.addEventListener('focus', handleFocus);
$contactTextArea.addEventListener('blur', handleBlur);
$contactTextArea.addEventListener('input', handleInput);
