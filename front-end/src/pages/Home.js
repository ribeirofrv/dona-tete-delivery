import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Home({ history }) {
  const redirect = (role) => {
    if (role === 'seller') history.push('/seller/orders');
    if (role === 'administrator') history.push('/admin/manage');
    if (role === 'customer') history.push('/customer/products');
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const { role } = user;
      console.log(role);
      redirect(role);
    } else {
      history.push('/login');
    }
  }, []);
  return (
    <div>Carregando...</div>
  );
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
