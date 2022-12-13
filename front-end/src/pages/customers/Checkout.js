// import { useState, useEffect } from 'react';
import Storage from '../../context/context';
import Header from '../../components/Header/Header';
import OrdersBtn from '../../components/Header/OrdersBtn';
import ProductBtn from '../../components/Header/ProductBtn';
import Table from '../../components/Cart/Table';
import CarTotalPrice from '../../components/CarTotalPrice';

export default function Checkout() {
  const { cart } = useContext(Storage);

  return (
    <>
      <Header
        FirstNavigationLink={ ProductBtn }
        SecondNavegationLink={ OrdersBtn }
        userDataTestId="customer_products__element-navbar-user-full-name"
      />
      <h1>Finalizar Pedido</h1>
      <Table data={ cart } />
    </>
  );
}
