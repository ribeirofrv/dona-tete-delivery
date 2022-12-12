import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import storage from '../context/context';
// import Provider from '../context/provider';

function CarTotalPrice() {
  const history = useHistory();
  const { total } = useContext(storage);

  const redirectToCheckout = () => {
    history.push('/customer/checkout');
  };

  /* useEffect(() => {
  }, [total]) */

  return (
    <button
      type="button"
      data-testid="customer_products__button-cart"
      className="cart-btn"
      onClick={ () => redirectToCheckout() }
      disabled={ total === '0,00' || total === '0.00' ? 1 : 0 }
    >
      <span data-testid="customer_products__checkout-bottom-value">
        { ` R$ ${total || 0}` }
      </span>
    </button>
  );
}

export default CarTotalPrice;
