import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from './UI/Button';

import clsx from 'clsx';
import '../scss/App.scss';

function Form({ title, handleFormSubmit }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const error = useSelector((state) => state.auth.error);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  function onSubmit() {
    handleFormSubmit(email, pass);
  }

  return (
    <form className="form" action="#" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className={clsx('search', 'form__input', 'form__input--email', {
            'form__input--error': errors?.email,
          })}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          autoComplete="false"
        />
        {errors?.email ? (
          <p className="error">{errors?.email?.message || 'Enter the email'}</p>
        ) : error === 'auth/user-not-found' ? (
          <p className="error">User is not found</p>
        ) : error === 'auth/email-already-in-use' ? (
          <p className="error">Email is already in use</p>
        ) : error === 'auth/invalid-email' ? (
          <p className="error">Invalid email</p>
        ) : (
          ''
        )}
      </div>

      <div>
        <input
          {...register('password', {
            required: true,
            minLength: { value: 6, message: 'At least 6 characters' },
          })}
          className={clsx('search', 'form__input', 'form__input--password', {
            'form__input--error': errors?.password,
          })}
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
          autoComplete="false"
        />
        {errors?.password ? (
          <p className="error">
            {errors?.password?.message || 'Enter the password'}
          </p>
        ) : error === 'auth/weak-password' ? (
          <p className="error">Unreliable password</p>
        ) : error === 'auth/wrong-password' ? (
          <p className="error">Wrong password</p>
        ) : (
          ''
        )}
      </div>
      <Button outline type="submit" disabled={!isValid}>
        {title}
      </Button>
    </form>
  );
}

export default Form;
