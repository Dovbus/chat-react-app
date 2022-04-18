import React from 'react';
import Input from '../UI/Input';
import DialogueItem from '../DialogueItem/DialogueItem';
import { useChats } from '../../redux/chatsSlice';
import { useCurrentUser } from '../../redux/currentUserSlice';

import './Dialogues.scss';

function Dialogues() {
  const chats = useChats();
  const currentUser = useCurrentUser();

  return (
    <div className="sidebar">
      <img className="avatar" src={`src/${currentUser.image}`} alt="user" />
      <Input
        className="sidebar__search"
        placeholder="search or start new chat"
      />
      <h1 className="sidebar__title">Chats</h1>
      <div className="dialogues">
        <ul className="dialogues__list">
          {chats.map((chat) => {
            return (
              <DialogueItem key={chat['chat-id']} chat={chat}></DialogueItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Dialogues;
