import { FormEvent, useState, ChangeEvent } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleOnChangeUsername(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handleOnChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(username);
    console.log(password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={handleOnChangeUsername}
          type="text"
          name="username"
        />
      </label>
      <label>
        Password
        <input
          value={password}
          onChange={handleOnChangePassword}
          type="password"
          name="password"
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
