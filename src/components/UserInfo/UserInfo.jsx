import React from 'react';
import { useUser } from '../../redux/userSlice';

import './UserInfo.scss';

function UserInfo() {
  const user = useUser();

  return (
    <div className="user-info">
      <div className="user-info__box">
        {user?.image && (
          <img
            className="user-info__img"
            src={`src/${user.image}`}
            alt={user.username}
          />
        )}
        {user?.username && <h5 className="user-info__name">{user.username}</h5>}
        {!user.image && <p className="user-info__no-img"></p>}
      </div>
    </div>
  );
}

export default UserInfo;
