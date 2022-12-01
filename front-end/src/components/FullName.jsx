import PropTypes from 'prop-types';
import React from 'react';

function FullName({ userName }) {
  return (
    <div
      data-testid="customer_products__element-navbar-user-full-name"
    >
      {userName}
    </div>
  );
}

FullName.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default FullName;
