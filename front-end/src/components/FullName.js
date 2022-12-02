// import PropTypes from 'prop-types';
import React from 'react';

function FullName() {
  const userName = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('🚀 ~ file: FullName.js:7 ~ userName ~ user', user);
    return user;
  };
  return (
    <div
      data-testid="customer_products__element-navbar-user-full-name"
    >
      {userName}
    </div>
  );
}

export default FullName;
