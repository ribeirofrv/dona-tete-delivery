import PropTypes from 'prop-types';
import dataTestIds from './utils/dataTestIds';

export default function SellerDetailsTable({ data }) {
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
            <td data-testid={ `${dataTestIds[59]}${index}` }>{index + 1}</td>
            <td data-testid={ `${dataTestIds[60]}${index}` }>
              {product.name}
            </td>
            <td data-testid={ `${dataTestIds[61]}${index}` }>
              {product.SalesProducts.quantity}
            </td>
            <td data-testid={ `${dataTestIds[62]}${index}` }>
              {product.price}
            </td>
            <td data-testid={ `${dataTestIds[63]}${index}` }>
              {product.price * product.SalesProducts.quantity}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

SellerDetailsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
