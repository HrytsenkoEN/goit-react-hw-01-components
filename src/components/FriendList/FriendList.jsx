import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { Friends } from './Friends';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendslist}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friends
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};