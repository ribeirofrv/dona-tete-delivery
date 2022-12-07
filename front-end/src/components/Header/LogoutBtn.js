import React from 'react';
import { Link } from 'react-router-dom';

function LogoutBtn() {
  return (
    <Link
      data-testid="customer_products__element-navbar-link-logout"
      to="/login"
    >
      LOGOUT
    </Link>
  );
}

export default LogoutBtn;
