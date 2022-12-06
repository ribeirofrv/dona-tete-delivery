import React, { useEffect } from 'react';
// import { PropTypes } from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

function CarTotalPrice() {
  const { cart } = useContext(storage);
  const [total, setTotal] = useState('0,00');

  const redirectToCheckout = () => {
    history.push('/customer/checkout');
  };

  useEffect(() => {
    if (cart.length > 0) {
      const totalValue = cart
        .reduce((acc, crr) => acc + Number(crr.subTotal.replace(/,/, '.')), 0);
      setTotal(totalValue.toFixed(2));
    }
  }, [cart]);

  return (
    <button
      type="button"
      data-testid="customer_products__button-cart"
      className="cart-btn"
      onClick={ () => redirectToCheckout() }
      disabled={ total === '0,00' || total === '0.00' ? 1 : 0 }
    >
      <span data-testid="customer_products__checkout-bottom-value">
        { ` R$ ${cart ? total.replace(/\./, ',') : 0}` }
      </span>
    </button>
  );
}

/* Products.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.fuc,
  }),
}.isRequired */

export default CarTotalPrice;
