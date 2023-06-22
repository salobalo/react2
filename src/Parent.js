
import React from 'react';
import Child from './Child';

const Parent = () => {
  const users = [
    { id: 1, name: 'John', age: 25, surname: 'Doe' },
    { id: 2, name: 'Jane', age: 30, surname: 'Doe' },

  ];

  const isUserLoggedIn = true;

  return (
    <div>
      <Child users={users} isUserLoggedIn={isUserLoggedIn} />
    </div>
  );
};

export default Parent;
