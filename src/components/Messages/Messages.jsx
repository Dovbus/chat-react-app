import React, { useRef, useEffect } from 'react';
import { useMessages } from '../../redux/messagesSlice';
import { useUser } from '../../redux/userSlice';
import Message from '../Message/Message';

import './Messages.scss';

function Messages() {
  const messages = useMessages();
  const user = useUser();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <>
      <div className="messages">
        <div className="messages__box">
          <div className="messages__content">
            {!messages.length && (
              <p className="messages__empty">
                Choose the chat to start a conversation
              </p>
            )}
            {messages.map((message) => {
              return (
                <Message
                  key={message.id}
                  message={message}
                  user={user}
                ></Message>
              );
            })}
          </div>
          <div ref={messagesEndRef}></div>
        </div>
      </div>
    </>
  );
}

export default Messages;
