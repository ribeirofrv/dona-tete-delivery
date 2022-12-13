import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import storage from '../context/context';
// import Provider from '../context/provider';

function CarTotalPrice() {
  const history = useHistory();
  const { cart, total, setTotal } = useContext(storage);

  const redirectToCheckout = () => {
    history.push('/customer/checkout');
  };

  useEffect(() => {
    if (cart) {
      const totalValue = cart
        .reduce((acc, crr) => acc + Number(crr.subTotal.replace(/,/, '.')), 0);
      setTotal(totalValue.toFixed(2));
    }
  }, [cart, setTotal]);

  return (
    <button
      type="button"
      data-testid="customer_products__button-cart"
      className="cart-btn"
      onClick={ () => redirectToCheckout() }
      disabled={ total.replace(/\./, ',') === '0,00' || total.replace(/\./, ',') === '0.00' ? 1 : 0 }
    >
      <span data-testid="customer_products__checkout-bottom-value">
        { ` R$ ${total.replace(/\./, ',') || 0}` }
      </span>
    </button>
  );
}

export default CarTotalPrice;
