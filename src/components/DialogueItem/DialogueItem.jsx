import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { loadMessages } from '../../redux/messagesSlice';
import { loadUser } from '../../redux/userSlice';
import { useNotificationShow } from '../../redux/notificationSlice';
import { formatDialogueDate } from '../../helpers';

import './DialogueItem.scss';

function DialogueItem({ chat }) {
  const { user, messages } = chat;
  const dispatch = useDispatch();
  const isNotification = useNotificationShow();
  const date = formatDialogueDate(messages[messages.length - 1].createdAt);
  const message =
    messages[messages.length - 1].content.length > 15
      ? `...${messages[messages.length - 1].content.slice(-15)}`
      : messages[messages.length - 1].content;

  function handleDialogueClick() {
    dispatch(loadMessages(messages));
    dispatch(loadUser(user));
  }

  return (
    <li
      className={clsx('dialogue', {
        'dialogue--receive': isNotification,
      })}
      onClick={handleDialogueClick}
    >
      <div className="dialogue__box">
        <img className="dialogue__img" src={`${user.image}`} alt="avatar" />
        <div className="dialogue__content">
          <span className="dialogue__name">{user.username}</span>
          <p className="dialogue__message">{message}</p>
        </div>
      </div>
      <div className="dialogue__time">{date}</div>
    </li>
  );
}

export default DialogueItem;
