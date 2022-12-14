import { useContext, useState /* useEffect */ } from 'react';
import { useHistory } from 'react-router-dom';
import { /* requestData */ requestPost } from '../../API/requests';
import Storage from '../../context/context';
import dataTestIds from '../utils/dataTestIds';

export default function AddressForm() {
  const { total } = useContext(Storage);

  const [seller, setSeller] = useState('default');
  const [deliveryAddress, setAddress] = useState('');
  const [deliveryNumber, setNumber] = useState('');
  const attendant = ['Fulana Pereira', 'Ciclana Silva'];
  // const attendant = requestData('customer/attendant');

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));
    const products = JSON.parse(localStorage.getItem('cart'));

    const body = {
      username: user.name,
      seller,
      status: 'Pendente',
      totalPrice: total,
      deliveryAddress,
      deliveryNumber,
      products,
    };
    const order = await requestPost('/customer/orders', body);
    console.log('👻 ~ file: AddressForm.js:33 ~ handleSubmit ~ order', order);
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
            && attendant.map((name, index) => (
              <option key={ `seller-${index}` } value={ name }>
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
