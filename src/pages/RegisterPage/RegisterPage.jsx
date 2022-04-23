import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../../components/SignUp';
import Button from '../../components/UI/Button';

import '../Authorization.scss';

function RegisterPage() {
  return (
    <div className="login">
      <div className="login__page">
        <div className="login__container">
          <div className="login__box">
            <div className="login__new">One of us?</div>
            <div className="login__please">
              If you have an account, please, sign in to have an access to the
              Chat
            </div>

            <Link to="/login" className="login__link">
              <Button className="login__register">Sign In</Button>
            </Link>
          </div>
          <div className="login__inner">
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
