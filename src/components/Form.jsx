import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Input from './UI/Input';
import Button from './UI/Button';

import '../scss/App.scss';

function Form({ title, handleFormSubmit }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const error = useSelector((state) => state.auth.error);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  function onSubmit() {
    handleFormSubmit(email, pass);
  }

  return (
    <form className="form" action="#" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          className="search form__input form__input--email"
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          autoComplete="false"
        />
        {errors?.email ? (
          <p className="error">Enter an email</p>
        ) : error?.code === 'auth/user-not-found' ? (
          <p className="error">User is not found</p>
        ) : error?.code === 'auth/email-already-in-use' ? (
          <p className="error">Email is already in use</p>
        ) : error?.code === 'auth/invalid-email' ? (
          <p className="error">Invalid email</p>
        ) : (
          ''
        )}
      </div>

      <div>
        <input
          {...register('password', {
            required: true,
          })}
          className="search form__input form__input--password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
          autoComplete="false"
        />
        {errors?.password ? (
          <p className="error">Enter the password</p>
        ) : error?.code === 'auth/weak-password' ? (
          <p className="error">Unreliable password</p>
        ) : error?.code === 'auth/wrong-password' ? (
          <p className="error">Wrong password</p>
        ) : (
          ''
        )}
      </div>
      <Button outline type="submit">
        {title}
      </Button>
    </form>
  );
}

export default Form;
