import React from 'react';
import ProductBtn from './ProductBtn';
import OrdersBtn from './OrdersBtn';
import FullName from './FullName';
import LogoutBtn from './LogoutBtn';

function NavBar() {
  return (
    <NavBar>
      <ProductBtn />
      <OrdersBtn />
      <FullName />
      <LogoutBtn />
    </NavBar>
  );
}

export default NavBar;
