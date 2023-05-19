import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  Username,
  UserInfo,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export function Profile(props) {
  const { avatar, username, tag, location, followers, views, likes } = props;
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Username>{username}</Username>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
