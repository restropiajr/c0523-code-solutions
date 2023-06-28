import { ChangeEvent, useState, KeyboardEvent } from 'react';

export default function ValidatedInput() {
  const [errorMessage, setErrorMessage] = useState({
    message: '',
    displayStyle: '',
    color: '',
  });
  const [password, setPassword] = useState('');

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    const newPassword = event.target.value;

    if (newPassword.length === 0) {
      setErrorMessage({
        message: 'A password is required.',
        displayStyle: 'fa-solid fa-x',
        color: 'red',
      });
    } else if (newPassword.length >= 1 && newPassword.length < 8) {
      setErrorMessage({
        message: 'Your password is too short.',
        displayStyle: 'fa-solid fa-x',
        color: 'red',
      });
    } else if (newPassword.length >= 8) {
      setErrorMessage({
        message: '',
        displayStyle: 'fa-solid fa-check',
        color: 'green',
      });
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && event.currentTarget.type === 'password') {
      event.preventDefault();
    }
  }

  return (
    <form action="">
      <label className="text-sm block" htmlFor="password">
        Password
      </label>
      <input
        value={password}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        className="block border-2 border-solid border-black p-1 inline-block"
        id="password"
        type="password"
        name="password"
      />
      <i
        className={`${errorMessage.displayStyle} inline-block m-2`}
        style={{ color: errorMessage.color }}></i>
      <p className="text-xs text-red-600 my-1">{errorMessage.message}</p>
    </form>
  );
}
