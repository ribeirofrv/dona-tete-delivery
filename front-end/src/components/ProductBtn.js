import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ProductBtn() {
  const history = useHistory();

  const redirectToProducts = () => {
    history.push('/customer/products');
  };

  return (
    <button
      type="submit"
      data-testid="customer_products__element-navbar-link-products"
      onClick={ () => redirectToProducts() }
    >
      PRODUTOS
    </button>
  );
}
