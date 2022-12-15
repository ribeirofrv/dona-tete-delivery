import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { requestData, requestPost } from '../../API/requests';
import Storage from '../../context/context';
import dataTestIds from '../utils/dataTestIds';

export default function AddressForm() {
  const { total } = useContext(Storage);
  const [seller, setSeller] = useState('default');
  const [deliveryAddress, setAddress] = useState('');
  const [deliveryNumber, setNumber] = useState('');
  const [attendant, setAttendant] = useState([]);
  const history = useHistory();

  const getSeller = async () => {
    const sellerReq = await requestData('/customer/checkout');
    console.log('🚀 ~ file: Checkout.js:25 ~ getSeller ~ sellerReq', sellerReq);
    setAttendant(sellerReq);
    /* setOrder({ ...order, sellerId: sellers[0].id }); */
  };

  useEffect(() => {
    getSeller();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { id } = JSON.parse(localStorage.getItem('user'));
    console.log('🚀 ~ file: AddressForm.js:30 ~ handleSubmit ~ id', id);
    const productsList = JSON.parse(localStorage.getItem('cart'));
    const products = productsList.map(({ productId, quantity }) => ({
      productId, quantity,
    }));

    const body = {
      userId: Number(id),
      totalPrice: total,
      deliveryAddress,
      deliveryNumber,
      sellerId: seller,
      status: 'Pendente',
      products,
    };
    console.log('👻 ~ file: AddressForm.js:45 ~ handleSubmit ~ body', body);

    const order = await requestPost('/customer/orders', body);

    history.push(`/customer/orders/${order.id}`);
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
          value={ seller }
          onChange={ ({ target: { value } }) => setSeller(value) }
        >
          <option value="default">Selecionar</option>
          {attendant.length > 0
            && attendant.map(({ id, name }) => (
              <option key={ `seller-${name}` } value={ id }>
                {name}
              </option>
            ))}
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
