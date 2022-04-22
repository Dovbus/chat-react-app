import React from 'react';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';
import Login from '../../components/Login';

import '../Authorization.scss';

function LoginPage() {
  return (
    <div className="login">
      <div className="login__page">
        <div className="login__container">
          <div className="login__box">
            <div className="login__new">New here?</div>
            <div className="login__please">
              If you don't have an account, please, sign up to have an access to
              the Chat
            </div>

            <Link to="/register" className="login__link">
              <Button className="login__register"> Sign Up</Button>
            </Link>
          </div>
          <div className="login__inner">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
