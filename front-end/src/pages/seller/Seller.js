import React, { useEffect, useState } from 'react';
import { requestData, setToken } from '../../API/requests';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import ProductBtn from '../../components/Header/ProductBtn';

export default function Seller() {
  const [orders, setOrders] = useState([]);

  const requestOrders = async () => {
    requestData('/seller/orders')
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setToken(user.token);
    requestOrders();
  }, []);

  return (
    <section>
      <Header
        FirstNavigationLink={ ProductBtn }
        SecondNavegationLink={ null }
        userDataTestId="customer_products__element-navbar-user-full-name"
      />
      <OrderCard testId="seller" orders={ orders } />
    </section>
  );
}
