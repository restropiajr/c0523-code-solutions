import { FormEvent } from 'react';

export default function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log('state:', formJson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username <input type="text" name="username" />
      </label>

      <label>
        Password <input type="password" name="password" />
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
}
