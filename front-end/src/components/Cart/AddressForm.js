import { useState/* useEffect */ } from 'react';
// import { requestPost } from '../../API/requests';
import dataTestIds from '../utils/dataTestIds';

export default function AddressForm() {
  const [seller, setSeller] = useState('default');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const isAble = (address.length > 0) && (number.length > 0) && (seller !== 'default');

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      seller,
      address,
      number,
    };
    console.log(body);
    // requestPost('/checkout', body);
  };

  return (
    <form
      className="address-details"
      onSubmit={ (e) => handleSubmit(e) }
    >
      <label htmlFor="seller">
        P. Vendedora Responsável:

        {/* Select deve ter nomes de vendedores que vem do back */}
        <select
          data-testid={ `${dataTestIds[29]}` }
          id="seller"
          name="seller"
          value={ seller }
          onChange={ ({ target: { value } }) => setSeller(value) }
        >
          <option value="default">Selecionar</option>
          <option>Beutrana Grotóits</option>
          {/* {sellers.length > 0
            && sellers.map(({ name, id }) => (
              <option key={ `seller-${id}` } value={ id }>
                {name}
              </option>
            ))} */}
        </select>

      </label>

      <label htmlFor="address">
        Endereço:
        <input
          data-testid={ `${dataTestIds[30]}` }
          id="address"
          type="text"
          value={ address }
          onChange={ ({ target: { value } }) => setAddress(value) }
        />
      </label>

      <label htmlFor="number">
        Número:
        <input
          data-testid={ `${dataTestIds[31]}` }
          id="number"
          type="text"
          value={ number }
          onChange={ ({ target: { value } }) => setNumber(value) }
        />
      </label>

      <button
        type="submit"
        data-testid={ `${dataTestIds[32]}` }
        disabled={ !isAble }
      >
        FINALIZAR PEDIDO
      </button>

    </form>
  );
}
