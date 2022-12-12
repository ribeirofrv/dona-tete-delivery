import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import FullName from './FullName';

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
        <SecondNavegationLink />
        <FullName dataTestId={ userDataTestId } />
        <Link
          data-testid="customer_products__element-navbar-link-logout"
          to="/login"
          onClick={ () => localStorage.clear() }
        >
          LOGOUT
        </Link>
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
