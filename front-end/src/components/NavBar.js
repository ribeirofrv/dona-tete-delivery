import React from 'react';
import ProductBtn from './ProductBtn';
import OrdersBtn from './OrdersBtn';
import FullName from './FullName';
import LogoutBtn from './LogoutBtn';

function NavBar() {
  return (
    <Header>
      <ProductBtn />
      <OrdersBtn />
      <FullName />
      <LogoutBtn />
    </Header>
  );
}

export default NavBar;
