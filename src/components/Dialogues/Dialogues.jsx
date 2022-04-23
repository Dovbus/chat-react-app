import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../UI/Input';
import DialogueItem from '../DialogueItem/DialogueItem';
import { useChats, setChatsSearch } from '../../redux/chatsSlice';
import { useCurrentUser } from '../../redux/currentUserSlice';
import { removeUser } from '../../redux/authSlice';
import SearchDialogue from './SearchDialogue';
import Button from '../UI/Button';

import '../../scss/App.scss';
import './Dialogues.scss';

function Dialogues() {
  const chats = useChats();
  const currentUser = useCurrentUser();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(setChatsSearch(search));
  }, [search]);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__box">
          <img className="avatar" src={`src/${currentUser.image}`} alt="user" />
          <Button
            className="sidebar__log-out"
            onClick={() => dispatch(removeUser())}
          >
            Log Out
          </Button>
        </div>
        <Input
          className="sidebar__search"
          placeholder="Search or start new chat..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="sidebar__button" onClick={() => setSearch('')} />
        <h1 className="sidebar__title">Chats</h1>
      </div>
      <div className="dialogues">
        <ul className="dialogues__list">
          {!search &&
            chats &&
            chats.map((chat) => (
              <DialogueItem key={chat['chat-id']} chat={chat} />
            ))}
        </ul>
        {search && <SearchDialogue />}
      </div>
    </div>
  );
}

export default Dialogues;
