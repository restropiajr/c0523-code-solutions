const $userList = document.querySelector('#user-list');

function getUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', (event) => {
    console.log(xhr.status);
    console.log(xhr.response);

    xhr.response.forEach((user) => {
      const $liUser = document.createElement('li');
      $liUser.textContent = user.name;
      $userList.appendChild($liUser);
    });
  });
  xhr.send();
}

getUsers();
