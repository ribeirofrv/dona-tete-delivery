import React from 'react';
import { useHistory } from 'react-router-dom';

export default function AdminBtn() {
  const history = useHistory();
  const redirectToAdmin = () => {
    history.push('/admin/manage');
  };

  return (
    <button
      type="submit"
      data-testid="customer_products__element-navbar-link-orders"
      onClick={ () => redirectToAdmin() }
    >
      GERENCIAR USUÁRIO
    </button>
  );
}
