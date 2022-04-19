import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadChats } from './redux/chatsSlice';
import { loadCurrentUser } from './redux/currentUserSlice';
import Container from './components/Container/Container';
import Dialogues from './components/Dialogues/Dialogues';
import Chat from './components/Chat/Chat';

import './scss/App.scss';
import 'react-notifications/lib/notifications.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadChats());
    dispatch(loadCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Dialogues />
      <Chat />
    </Container>
  );
}

export default App;
