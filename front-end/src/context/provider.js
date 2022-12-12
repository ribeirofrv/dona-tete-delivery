import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import storage from './context';

function Provider({ children }) {
  const [total, setTotal] = useState('0,00');
  const [cart, setCart] = useState([]);

  const getCartItem = () => {
    const cartItens = JSON.parse(localStorage.getItem('cart'));
    return cartItens;
  };

  useEffect(() => {
    setCart(getCartItem() || []);
    if (cart.length > 0) {
      const totalValue = cart
        .reduce((acc, crr) => acc + Number(crr.subTotal.replace(/,/, '.')), 0);
      setTotal(totalValue.toFixed(2));
    }
  }, [total, cart]);

  const context = useMemo(() => (
    { total }), [total]);

  return (
    <storage.Provider
      value={ context }
    >
      { children }
    </storage.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
