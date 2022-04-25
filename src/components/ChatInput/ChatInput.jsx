import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useFetch, { URL_MESSAGE } from '../../hooks/useFetch';
import {
  addChatMessage,
  receiveChatMessage,
  sortChats,
} from '../../redux/chatsSlice';
import {
  addMessage,
  receiveMessage,
  useMessages,
} from '../../redux/messagesSlice';
import { useUser } from '../../redux/userSlice';
import {
  showNotification,
  closeNotification,
  useNotificationShow,
} from '../../redux/notificationSlice';
import Input from '../UI/Input';
import Notification from '../Notification/Notification';

import './ChatInput.scss';

function ChatInput() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState({});
  const dispatch = useDispatch();
  const user = useUser();пше фвв
  const isNotificationShow = useNotificationShow();
  const { get } = useFetch(URL_MESSAGE);
  const messages = useMessages();

  useEffect(() => {
    get('jokes/random')
      .then((data) => {
        setResponse({
          id: Math.random(),
          content: data.value,
          createdAt: new Date().getTime(),
          'user-id': user['user-id'],
          sendTo: 'User',
        });
        dispatch(sortChats());
      })
      .catch((error) => console.log(error));
  }, [message]);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!message) {
      return;
    }

    dispatch(addChatMessage({ message, sendTo: user.username }));
    dispatch(addMessage({ message, sendTo: user.username }));
    setMessage('');

    setTimeout(() => {
      dispatch(
        receiveChatMessage({
          ...response,
        })
      );
      dispatch(receiveMessage({ ...response }));
      dispatch(showNotification());
      setTimeout(() => {
        dispatch(closeNotification());
      }, 4000);
    }, 9000);
  }

  return (
    <>
      <div className="type">
        {messages.length !== 0 && (
          <form action="#" className="type__form" onSubmit={handleFormSubmit}>
            <Input
              type="text"
              className="type__input"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="type__btn" type="submit" />
          </form>
        )}
      </div>
      {isNotificationShow && <Notification />}
    </>
  );
}

export default ChatInput;
