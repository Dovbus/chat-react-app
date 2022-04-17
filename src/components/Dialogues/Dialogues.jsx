import React from 'react';
import Input from '../UI/Input';
import DialogueItem from '../DialogueItem/DialogueItem';
import db from '../../assets/db.json';

import './Dialogues.scss';

function Dialogues() {
  return (
    <div className="sidebar">
      <img className="avatar" src={`src/${db.currentUser.image}`} alt="user" />
      <Input
        className="sidebar__search"
        placeholder="search or start new chat"
      />
      <h1 className="sidebar__title">Chats</h1>
      <ul className="dialogues">
        {db.chats.map((chat) => {
          return (
            <DialogueItem key={chat['chat-id']} chat={chat}></DialogueItem>
          );
        })}
      </ul>
    </div>
  );
}

export default Dialogues;
