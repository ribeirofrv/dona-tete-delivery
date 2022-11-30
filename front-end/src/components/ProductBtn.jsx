import React from 'react';
import { Link } from 'react-router-dom';

function ProductBtn() {
  return (
    <Link
      data-testid="customer_products__element-navbar-link-products"
      to="customer/products"
    >
      PRODUTOS
    </Link>
  );
}

export default ProductBtn;
