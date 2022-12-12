import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import Provider from '../context/provider';

function CarTotalPrice() {
  const history = useHistory();
  /* const [total, setTotal] = useState('0,00');
  const [cart, setCart] = useState([]); */
  // const { cart, total } = useContext(Provider);

  const redirectToCheckout = () => {
    history.push('/customer/checkout');
  };

  const getCartItem = () => {
    const cartItens = JSON.parse(localStorage.getItem('total'));
    return cartItens;
  };

  useEffect(() => {
    getCartItem();
  }, []);

  return (
    <button
      type="button"
      data-testid="customer_products__button-cart"
      className="cart-btn"
      onClick={ () => redirectToCheckout() }
      /* disabled={ total === '0,00' || total === '0.00' ? 1 : 0 } */
    >
      <span data-testid="customer_products__checkout-bottom-value">
        { ` R$ ${getCartItem() ? getCartItem() : 0}` }
      </span>
    </button>
  );
}

export default CarTotalPrice;
