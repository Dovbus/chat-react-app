import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useFetch, { URL_MESSAGE } from '../../hooks/useFetch';
import { addMessage, receiveMessage } from '../../redux/messagesSlice';
import { useUser } from '../../redux/userSlice';
import Input from '../UI/Input';
import clsx from 'clsx';
import './ChatInput.scss';

function ChatInput() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState({});
  const dispatch = useDispatch();
  const user = useUser();
  const { get } = useFetch(URL_MESSAGE);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    get('jokes/random')
      .then((data) =>
        setResponse({
          id: Math.random(),
          content: data.value,
          createdAt: new Date().getTime(),
        })
      )
      .catch((error) => console.log(error));
  }, [message]);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!message) {
      return;
    }

    dispatch(addMessage(message));
    setMessage('');

    setTimeout(() => {
      dispatch(receiveMessage({ ...response, 'user-id': user['user-id'] }));
      setNotification(true);
    }, 1000);

    setTimeout(() => {
      setNotification(false);
    }, 7000);
  }

  return (
    <>
      <div className="type">
        <form action="#" className="type__form" onSubmit={handleFormSubmit}>
          <Input
            type="text"
            className="type__input"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></Input>
          <button className="type__btn" type="submit">
            <img src={'src/assets/shared/icon-send.svg'} alt="send icon" />
          </button>
        </form>
      </div>
      {notification && (
        <div className="notify-box">
          <img
            className="notify-box__img"
            src={'src/assets/shared/icon-mail.svg'}
            alt="mail"
          />
          You got mail!
        </div>
      )}
    </>
  );
}

export default ChatInput;
