import React from 'react';
import { useMessages } from '../../redux/messagesSlice';

import './Messages.scss';

function Messages() {
  const messages = useMessages();
  return <div className="messages"></div>;
}

export default Messages;
