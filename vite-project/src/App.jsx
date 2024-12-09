import Profile from "./components/Profile/profile.jsx";
import FriendList from "./components/FriendList/friendList.jsx";
import TransactionHistory from "./components/TransactionHistory/transactionHistory.jsx";

import user from "./components/Profile/user.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

export const App = () => {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};
