import user from './data/user';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <section>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </section>
  );
};
