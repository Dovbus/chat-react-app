import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import './Chat.scss';

function Messages() {
  return (
    <section className="chat">
      <UserInfo />
      <Messages />
    </section>
  );
}

export default Messages;
