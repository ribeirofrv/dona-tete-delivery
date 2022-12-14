import React from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import FullName from './FullName';
import LogoutBtn from './LogoutBtn';

export default function Header({
  FirstNavigationLink,
  SecondNavegationLink,
  userDataTestId,
}) {
  return (
    <header className="common-header">
      <h1>Tetê</h1>
      <nav className="buttons-content">
        <FirstNavigationLink />
        { SecondNavegationLink ? <SecondNavegationLink /> : <div />}
        <FullName dataTestId={ userDataTestId } />
        <LogoutBtn />
      </nav>
    </header>
  );
}

Header.propTypes = {
  FirstNavigationLink: PropTypes.elementType.isRequired,
  SecondNavegationLink: PropTypes.elementType,
  userDataTestId: PropTypes.string.isRequired,
};

Header.defaultProps = {
  SecondNavegationLink: null,
};
