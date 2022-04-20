import React from 'react';
import { useDispatch } from 'react-redux';
import Input from '../UI/Input';
import DialogueItem from '../DialogueItem/DialogueItem';
import {
  useChats,
  setChatsSearch,
  useSearchedChats,
} from '../../redux/chatsSlice';
import { useCurrentUser } from '../../redux/currentUserSlice';

import './Dialogues.scss';

function Dialogues() {
  const chats = useChats();
  const searchedChats = useSearchedChats();
  const currentUser = useCurrentUser();
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <img className="avatar" src={`src/${currentUser.image}`} alt="user" />
      <Input
        className="sidebar__search"
        placeholder="search or start new chat"
        onChange={(e) => dispatch(setChatsSearch(e.target.value))}
      />
      <h1 className="sidebar__title">Chats</h1>
      <div className="dialogues">
        <ul className="dialogues__list">
          {!searchedChats.length &&
            chats &&
            chats.map((chat) => {
              return (
                <DialogueItem key={chat['chat-id']} chat={chat}></DialogueItem>
              );
            })}
        </ul>
        {searchedChats && searchedChats.length && (
          <div className="suggestion">
            <ul className="suggestion__list">
              {searchedChats.map((searched) => {
                return (
                  <DialogueItem
                    key={searched['chat-id']}
                    chat={searched}
                  ></DialogueItem>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dialogues;
