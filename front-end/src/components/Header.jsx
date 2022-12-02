import React from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';
import FullName from './FullName';

export default function Header({
  FirstNavigationLink,
  SecondNavegationLink,
  username,
}) {
  return (
    <header className="common-header">
      <h1>Tetê</h1>
      <nav className="buttons-content">
        <FirstNavigationLink />
        <SecondNavegationLink />
        <FullName username={ username } />
        <LogoutBtn />
      </nav>
    </header>
  );
}

Header.propTypes = {
  FirstNavigationLink: PropTypes.elementType.isRequired,
  SecondNavegationLink: PropTypes.elementType,
  username: PropTypes.string.isRequired,
};

Header.defaultProps = {
  SecondNavegationLink: null,
};
