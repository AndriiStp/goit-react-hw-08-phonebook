import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit}
      autoComplete="off"
      autoFocus
    >
      <label className={css.label}>
        Username
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="My name"
        />
      </label>
      <label className={css.label}>
        E-mail
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="user@mail.com"
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          placeholder="******"
        />
      </label>
      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};
