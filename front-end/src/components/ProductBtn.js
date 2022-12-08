import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ProductBtn() {
  const history = useHistory();
  const url = history.location.pathname;
  const redirectToProducts = () => {
    history.push('/customer/products');
  };

  const redirectToOrders = () => {
    history.push('/seller/orders');
  };

  return (
    <div>
      { url.includes('customer') ? (
        <button
          type="submit"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => redirectToProducts() }
        >
          PRODUTOS
        </button>
      ) : (
        <button
          type="submit"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => redirectToOrders() }
        >
          PEDIDOS
        </button>
      )}
    </div>
  );
}
