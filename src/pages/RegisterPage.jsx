import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../components/SignUp';

function RegisterPage() {
  return (
    <div>
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
      <SignUp />
    </div>
  );
}

export default RegisterPage;
