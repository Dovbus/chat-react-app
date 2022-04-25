import React from 'react';
import { useDispatch } from 'react-redux';
import { closeNotification } from '../../redux/notificationSlice';

import './Notification.scss';

function Notification() {
  const dispatch = useDispatch();

  return (
    <div className="notify-box">
      <button
        className="notify-box__button"
        onClick={() => dispatch(closeNotification())}
      ></button>
      <img
        className="notify-box__img"
        src={'assets/shared/icon-mail.svg'}
        alt="mail icon"
      />
      You've Got Mail!
    </div>
  );
}

export default Notification;
