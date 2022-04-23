import React from 'react';
import { useSearchedChats } from '../../redux/chatsSlice';
import DialogueItem from '../DialogueItem/DialogueItem';

import './Dialogues.scss';

function SearchDialogue() {
  const searchedChats = useSearchedChats();

  return (
    <div className="suggestion">
      <ul className="suggestion__list">
        {searchedChats.map((searched) => (
          <DialogueItem key={searched['chat-id']} chat={searched} />
        ))}
      </ul>
    </div>
  );
}

export default SearchDialogue;
