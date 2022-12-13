import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function OrdersBtn() {
  // const history = useHistory();

  // const redirectToOrders = () => {
  //   history.push('/customer/products');
  // };

  return (
    <Link
      data-testid="customer_products__element-navbar-link-orders"
      to="/customer/orders"
    >
      MEUS PEDIDOS
    </Link>
  );
}

export default OrdersBtn;
