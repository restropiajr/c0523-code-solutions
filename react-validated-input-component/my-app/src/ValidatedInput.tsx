import { ChangeEvent, useState, FormEvent } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const iconDisplay =
    password.length < 8 ? 'fa-solid fa-x' : 'fa-solid fa-check';
  const iconColor =
    password.length === 0 || (password.length >= 1 && password.length < 8)
      ? 'red'
      : 'green';

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const newPassword = event.target.value;

    setPassword((prevPassword) => {
      return newPassword;
    });

    setMessage((prevMessage) => {
      if (newPassword.length === 0) {
        return 'A password is required.';
      } else if (newPassword.length >= 1 && newPassword.length < 8) {
        return 'Your password is too short.';
      } else {
        return '';
      }
    });
  }

  function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label className="text-sm block" htmlFor="password">
        Password
      </label>
      <input
        value={password}
        onChange={handleOnChange}
        className="block border-2 border-solid border-black p-1 inline-block"
        id="password"
        type="password"
        name="password"
      />
      {password.length > 0 && (
        <i
          className={`${iconDisplay} inline-block m-2`}
          style={{ color: iconColor }}></i>
      )}
      <p className="text-xs text-red-600 my-1">{message}</p>
    </form>
  );
}
