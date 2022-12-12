import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function FullName({ dataTestId }) {
  const [fullName, setFullName] = useState([]);

  const getName = () => {
    const userName = JSON.parse(localStorage.getItem('user')).name;
    setFullName(userName);
  };
  useEffect(() => {
    getName();
  }, []);

  return <div data-testid={ dataTestId }>{fullName}</div>;
}

FullName.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};

export default FullName;
