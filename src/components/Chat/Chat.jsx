import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import Messages from '../Messages/Messages';
import ChatInput from '../ChatInput/ChatInput';
import './Chat.scss';

function Chat() {
  return (
    <section className="chat">
      <UserInfo />
      <Messages />

      <ChatInput />
    </section>
  );
}

export default Chat;
