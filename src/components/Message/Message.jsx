import React from 'react';
import clsx from 'clsx';
import { formatChatsDate } from '../../helpers';

import './Message.scss';

function Message({ message, user }) {
  const { content, createdAt, 'user-id': id } = message;
  const className = clsx('message', {
    'message--responder': id !== user['user-id'],
  });
  return (
    <div className={className}>
      <div className="message__items">
        <div className="message__item">
          <div className="message__content">
            {id === user['user-id'] && (
              <img
                className="message__img"
                src={`src/${user.image}`}
                alt={user.username}
              />
            )}
            <p className="message__text">{content}</p>
          </div>
          <p className="message__time">{formatChatsDate(createdAt)}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
