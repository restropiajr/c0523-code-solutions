const $contactForm = document.querySelector('#contact-form');

function getContactInformation(event) {
  event.preventDefault();
  const contactInformation = {};

  contactInformation.name = $contactForm.elements.name.value;
  contactInformation.email = $contactForm.elements.email.value;
  contactInformation.message = $contactForm.elements.message.value;

  console.log(contactInformation);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', getContactInformation);
