// import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function FullName() {
  const [fullName, setFullName] = useState([]);

  const getName = () => {
    const userName = JSON.parse(localStorage.getItem('user')).name;
    setFullName(userName);
  };
  useEffect(() => {
    getName();
  }, []);

  return (
    <div
      data-testid="customer_products__element-navbar-user-full-name"
    >
      {fullName}
    </div>
  );
}

export default FullName;
