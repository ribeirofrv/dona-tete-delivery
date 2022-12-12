// import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function FullName() {
  const [user, setUser] = useState('');

  const getName = () => {
    const userName = JSON.parse(localStorage.getItem('user'));
    console.log('🚀 ~ file: FullName.js:7 ~ userName ~ user', userName);
    setUser(userName.name);
  };
  useEffect(() => {
    getName();
  });

  return (
    <div
      data-testid="customer_products__element-navbar-user-full-name"
    >
      {user}
    </div>
  );
}

export default FullName;
