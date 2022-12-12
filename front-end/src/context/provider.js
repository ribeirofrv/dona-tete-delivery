import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import storage from './context';

function Provider({ children }) {
  const [total, setTotal] = useState('0,00');

  /* const getCartItem = () => {
    const cartItens = JSON.parse(localStorage.getItem('cart'));
    return cartItens;
  }; */

  /*  const saveCartItem = (item) => {
    localStorage.setItem('cart', JSON.stringify(item));
  }; */
  /* const newItem = (item) => {
    const getCartProducts = getCartItem() || [];
    const itemAlreadySave = getCartProducts
      .find((productItem) => productItem.productId === item.productId);
    if (getCartProducts.length === 0) {
      console.log('1');
      return saveCartItem([item]); // localSotrage.setItem
    }

    if (itemAlreadySave) {
      getCartProducts.forEach((arrayItem) => {
        if (arrayItem.productId === item.productId) {
          arrayItem.quantity = item.quantity;
          arrayItem.subTotal = item.subTotal;
        }
      });
      console.log('2');
      saveCartItem(getCartProducts);
    } else {
      getCartProducts.push(item);
      console.log('3');
      saveCartItem(getCartProducts);
    }
  }; */

  /*   useEffect(() => {
    setCart(getCartItem());
    if (cart.length > 0) {
      const totalValue = cart
        .reduce((acc, crr) => acc + Number(crr.subTotal.replace(/,/, '.')), 0);
      setTotal(totalValue.toFixed(2));
      console.log('🚀 ~ file: CarTotalPrice.js:21 ~ useEffect ~ total', total);
    }
  }, [total, cart]); */

  /* const value = useMemo(() => , [newItem]); */

  const context = useMemo(() => total, setTotal, [total, setTotal]);

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
