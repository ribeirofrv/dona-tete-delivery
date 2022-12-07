import React from 'react';
import OrderCard from '../../components/OrderCard';

export default function Seller() {
  const [orders, setOrders] = useState([]);
  return (
    <OrderCard testId="seller" orders={ orders } />
  );
}
