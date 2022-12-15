import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SellerBtn() {
  const history = useHistory();

  const redirectToOrders = () => {
    history.push('/seller/orders');
  };

  return (
    <button
      type="submit"
      data-testid="customer_products__element-navbar-link-orders"
      onClick={ () => redirectToOrders() }
    >
      PEDIDOS
    </button>
  );
}
