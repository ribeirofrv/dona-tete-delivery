import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { requestData, requestPost } from '../../API/requests';
import Storage from '../../context/context';
import dataTestIds from '../utils/dataTestIds';

export default function AddressForm() {
  const { total } = useContext(Storage);

  const [sellerInput, setSellerInput] = useState('default');
  const [deliveryAddress, setAddress] = useState('');
  const [deliveryNumber, setNumber] = useState('');
  const [sellers, setSellers] = useState([]);

  const history = useHistory();
  const redirectToOrders = (saleId) => history.push(`/customer/orders/${saleId}`);

  const getSeller = async () => {
    const sellerReq = await requestData('/customer/checkout');
    console.log(':rocket: ~ file: Checkout.js:25 ~ getSeller ~ sellerReq', sellerReq);
    setSellers(sellerReq);
    // setOrder({ ...order, sellerId: sellers[0].id });
  };
  console.log(':rocket: ~ file: Checkout.js:28 ~ getSeller ~ sellers', sellers);

  useEffect(() => {
    getSeller();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const products = JSON.parse(localStorage.getItem('cart'));
    const totalPrice = +(total.replace(',', '.'));

    const body = {
      seller: sellers[0].id,
      status: 'Pendente',
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      products,
    };
    console.log('👻 ~ file: AddressForm.js:44 ~ handleSubmit ~ body', body);

    requestPost('/customer/orders', body)
      .then((order) => redirectToOrders(order.id))
      .catch((error) => console.log(error));
  };

  const isAble = deliveryAddress.length > 0
    && deliveryNumber.length > 0
    && seller !== 'default';

  return (
    <form className="address-details" onSubmit={ (e) => handleSubmit(e) }>
      <label htmlFor="seller">
        P. Vendedora Responsável:
        <select
          data-testid={ `${dataTestIds[30]}` }
          id="seller"
          name="seller"
          value={ sellerInput }
          onChange={ ({ target: { value } }) => setSellerInput(value) }
        >
          <option value="default">Selecionar</option>
          {sellers.length > 0
            ? sellers.map(({ name, id }) => (
              <option key={ `seller-${id}` } value={ id }>
                {name}
              </option>
            )) : <option value="default">Nenhuma vendedora cadastrada</option>}
        </select>
      </label>

      <label htmlFor="address">
        Endereço:
        <input
          data-testid={ `${dataTestIds[31]}` }
          id="address"
          type="text"
          value={ deliveryAddress }
          onChange={ ({ target: { value } }) => setAddress(value) }
        />
      </label>

      <label htmlFor="number">
        Número:
        <input
          data-testid={ `${dataTestIds[32]}` }
          id="number"
          type="text"
          value={ deliveryNumber }
          onChange={ ({ target: { value } }) => setNumber(value) }
        />
      </label>

      <button
        type="submit"
        data-testid={ `${dataTestIds[33]}` }
        disabled={ !isAble }
      >
        FINALIZAR PEDIDO
      </button>
    </form>
  );
}
