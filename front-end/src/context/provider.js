import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import storage from './context';

function Provider({ children }) {
  const [total, setTotal] = useState('0,00');
  const [cart, setCart] = useState([]);

  const getCartItem = () => {
    const cartItens = JSON.parse(localStorage.getItem('cart'));
    return cartItens;
  };

  const saveCartItem = (item) => {
    localStorage.setItem('cart', JSON.stringify(item));
  };

  const newItem = (item) => {
    const getCartProducts = getCartItem() || [];
    const itemAlreadySave = getCartProducts.find(
      (productItem) => productItem.productId === item.productId,
    );
    if (getCartProducts.length === 0) {
      setCart([item]);
      return saveCartItem([item]);
    }

    if (itemAlreadySave) {
      getCartProducts.forEach((arrayItem) => {
        if (arrayItem.productId === item.productId) {
          arrayItem.quantity = item.quantity;
          arrayItem.subTotal = item.subTotal;
        }
      });
      setCart(getCartProducts);
      saveCartItem(getCartProducts);
    } else {
      getCartProducts.push(item);
      setCart(getCartProducts);
      saveCartItem(getCartProducts);
    }
  };

  const context = useMemo(() => (
    { cart, newItem, setTotal, total }), [cart, newItem, setTotal, total]);

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
