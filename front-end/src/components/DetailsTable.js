import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function DetailsTable({ data }) {
  const history = useHistory();
  const testId = history.location.pathname.includes('seller') ? 'seller' : 'customer';
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `${testId}_order_details__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={
                `${testId}_order_details__element-order-table-name-${index}`
              }
            >
              {product.name}
            </td>
            <td
              data-testid={
                `${testId}_order_details__element-order-table-quantity-${index}`
              }
            >
              {product.SalesProducts.quantity}
            </td>
            <td
              data-testid={
                `${testId}_order_details__element-order-table-unit-price-${index}`
              }
            >
              {product.price}
            </td>
            <td
              data-testid={
                `${testId}_order_details__element-order-table-sub-total-${index}`
              }
            >
              {product.price * product.SalesProducts.quantity}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

DetailsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
