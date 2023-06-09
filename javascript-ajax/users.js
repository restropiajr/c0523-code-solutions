const $userList = document.querySelector('#user-list');

function getUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/agents');
  xhr.responseType = 'json';
  xhr.addEventListener('load', (event) => {
    console.log(xhr.status);
    console.log(xhr.response.data);

    xhr.response.data.forEach((user) => {
      const $li = document.createElement('li');
      $li.textContent = user.description;
      $userList.appendChild($li);

      // const $img = document.createElement('img');
      // $img.setAttribute('src', user.bustPortrait);
      // $li.appendChild($img);
    });
  });
  xhr.send();
}

getUsers();
