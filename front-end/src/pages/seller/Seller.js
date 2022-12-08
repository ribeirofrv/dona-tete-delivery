import React, { useEffect, useState } from 'react';
import { requestData, setToken } from '../../API/requests';
import OrderCard from '../../components/OrderCard';

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
    <OrderCard testId="seller" orders={ orders } />
  );
}
