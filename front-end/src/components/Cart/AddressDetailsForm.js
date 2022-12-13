import { requestData } from '../../API/requests';
import dataTestIds from '../utils/dataTestIds';

export default function AddressDetailsForm({ data }) {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const requestSellers = async () => {
      requestData('/seller').then((allSellers) => setSellers(allSellers));
    };
    requestSellers();
  }, []);

  return (
    <form className="address-details">
      <label htmlFor="seller">
        P. Vendedora Responsável:
        <select data-testid={`${dataTestIds[29]}`} id="seller" name="seller">
          <option value="default">Selecionar</option>
          {sellers.length > 0 &&
            sellers.map(({ name, id }) => (
              <option key={`seller-${id}`} value={id}>
                {name}
              </option>
            ))}
        </select>
      </label>
      <label htmlFor="address">
        Endereço:
        <input
          data-testid={`${dataTestIds[30]}`}
          id="address"
          type="text"
          value={address}
          onChange={({ target: { value } }) => setDeliveryAddress(value)}
        />
      </label>
      <label htmlFor="number">
        Número:
        <input
          data-testid={`${dataTestIds[31]}`}
          id="number"
          type="text"
          value={number}
          onChange={({ target: { value } }) => setDeliveryNumber(value)}
        />
      </label>
      <button
        type="button"
        data-testid={`${dataTestIds[32]}`}
        onClick={finishOrder}
        disabled={!isAble}
      >
        FINALIZAR PEDIDO
      </button>
    </form>
  );
}

AddressDetailsForm.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
