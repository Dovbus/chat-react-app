import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { loadChats } from '../redux/chatsSlice';
import { loadCurrentUser } from '../redux/currentUserSlice';
import Container from '../components/Container/Container';
import Dialogues from '../components/Dialogues/Dialogues';
import Chat from '../components/Chat/Chat';

import '../scss/App.scss';

function HomePage() {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  useEffect(() => {
    dispatch(loadChats());
    dispatch(loadCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isAuth ? (
        <Container>
          <Dialogues />
          <Chat />
        </Container>
      ) : (
        <Navigate replace to="/login" />
      )}
    </>
  );
}

export default HomePage;
