import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export function FriendCard({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <FriendStatus status={isOnline}>{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName status={isOnline}>{name}</FriendName>
    </FriendItem>
  );
}

FriendItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
