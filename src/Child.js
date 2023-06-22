
import React from 'react';

const Child = ({ users, isUserLoggedIn }) => {
  if (!isUserLoggedIn) {
    return <div>You are not authorized to see user list.</div>;
  }

  if (users.length === 0) {
    return <div>No users in the system.</div>;
  }

  return (
    <div>
      <h2>Users List:</h2>
      <div>
        {users.map(user => (
          <div key={user.id}>
            {user.name} {user.surname}: {user.age}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Child;
