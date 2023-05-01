import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { Statistics } from '../components/Statistics/Statistics';
import data from '../data/data.json';

import { FriendList } from '../components/FriendList/FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from '../components/Transaction/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        padding: 50,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        rowGap: 50,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};