function helloThere() {
  const $message = document.querySelector('.message');
  $message.textContent = 'Hello There';
}

setTimeout(helloThere, 2000);
