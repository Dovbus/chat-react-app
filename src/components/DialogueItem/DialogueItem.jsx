import React from 'react';
import { formatDialogueDate } from '../../helpers';

import './DialogueItem.scss';

function DialogueItem({ chat }) {
  const { user, messages } = chat;
  const date = formatDialogueDate(messages[messages.length - 1].createdAt);
  const message = messages[messages.length - 1].content
    .split(' ')
    .slice(-5)
    .join(' ');

  return (
    <li className="dialogue">
      <div className="dialogue__box">
        <img className="dialogue__img" src={`src/${user.image}`} alt="avatar" />
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
