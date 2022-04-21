import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

function LoginPage() {
  return (
    <div>
      <div>Login</div>
      <p>
        or <Link to="/register">Register</Link>
      </p>
      <Login />
    </div>
  );
}

export default LoginPage;
