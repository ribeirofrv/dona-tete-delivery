import React from 'react';
import { useHistory } from 'react-router-dom';

function OrdersBtn() {
  const history = useHistory();

  const redirectToOrders = () => {
    history.push('/customer/products');
  };

  return (
    <button
      type="submit"
      data-testid="customer_products__element-navbar-link-orders"
      onClick={ () => redirectToOrders() }
    >
      MEUS PEDIDOS
    </button>
  );
}

export default OrdersBtn;
