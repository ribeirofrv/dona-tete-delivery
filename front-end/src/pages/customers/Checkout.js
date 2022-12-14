import { useContext } from 'react';
import Storage from '../../context/context';
import dataTestIds from '../../components/utils/dataTestIds';

import Header from '../../components/Header/Header';
import OrdersBtn from '../../components/Header/OrdersBtn';
import ProductBtn from '../../components/Header/ProductBtn';

import Table from '../../components/Cart/Table';
import AddressForm from '../../components/Cart/AddressForm';

export default function Checkout() {
  const { total } = useContext(Storage);

  return (
    <>
      <Header
        FirstNavigationLink={ ProductBtn }
        SecondNavegationLink={ OrdersBtn }
        userDataTestId="customer_products__element-navbar-user-full-name"
      />
      <h1>Finalizar Pedido</h1>
      <Table />
      <span data-testid={ `${dataTestIds[29]}` }>{`${total.replace('.', ',')}`}</span>
      <AddressForm />
    </>
  );
}
