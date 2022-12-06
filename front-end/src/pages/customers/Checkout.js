import { useState } from 'react';

import Header from '../../components/Header';
import OrdersBtn from '../../components/OrdersBtn';
import ProductBtn from '../../components/ProductBtn';
import Table from '../../components/Table';
import CarTotalPrice from '../../components/CarTotalPrice';

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const { name } = localStorage.getItem('user');
    const cartStorage = localStorage.getItem('carrinho');
    setUsername(name);
    setCart(cartStorage);
  }, []);

  return (
    <>
      <Header
        FirstNavigationLink={ ProductBtn }
        SecondNavegationLink={ OrdersBtn }
        username={ username }
      />
      <h1>Finalizar Pedido</h1>
      <Table data={ cart } />
      <CarTotalPrice />
    </>
  );
}
