import React, { useEffect/* , useContext */ } from 'react';
import { useHistory } from 'react-router-dom';
// import storage from '../context/context';

function CarTotalPrice() {
  const history = useHistory();
  const [total, setTotal] = useState('0,00');
  const { cart, setCart } = useState([]);
  console.log('🚀 ~ file: CarTotalPrice.js:9 ~ CarTotalPrice ~ cart', cart);

  const redirectToCheckout = () => {
    history.push('/customer/checkout');
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
    if (cart.length > 0) {
      const totalValue = cart
        .reduce((acc, crr) => acc + Number(crr.subTotal.replace(/,/, '.')), 0);
      setTotal(totalValue.toFixed(2));
      console.log('🚀 ~ file: CarTotalPrice.js:21 ~ useEffect ~ total', total);
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

export default CarTotalPrice;
