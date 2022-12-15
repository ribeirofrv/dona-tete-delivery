import React, { useEffect, useState } from 'react';
import { requestData } from '../../API/requests';
import Header from '../../components/Header';
import OrdersBtn from '../../components/Header/OrdersBtn';
import ProductBtn from '../../components/Header/ProductBtn';
import OrderCard from '../../components/OrderCard';

export default function Customer() {
  const [orders, setOrders] = useState([]);

  const requestOrders = async () => {
    requestData('/customer/orders')
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    requestOrders();
  }, []);

  return (
    <section>
      <Header
        FirstNavigationLink={ ProductBtn }
        SecondNavegationLink={ OrdersBtn }
        userDataTestId="customer_products__element-navbar-user-full-name"
      />
      <OrderCard testId="customer" orders={ orders } />
    </section>
  );
}
