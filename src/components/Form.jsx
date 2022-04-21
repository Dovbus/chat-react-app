import { useState } from 'react';
import Input from './UI/Input';
import Button from './UI/Button';

function Form({ title, handleFormSubmit }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div>
      <form action="#" onSubmit={() => handleFormSubmit(email, pass)}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <Input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
        <Button>{title}</Button>
      </form>
    </div>
  );
}

export default Form;
