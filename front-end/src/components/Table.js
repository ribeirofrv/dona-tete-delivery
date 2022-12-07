import PropTypes from 'prop-types';
import dataTestIds from './utils/dataTestIds';

export default function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) => (
          <tr key={ index }>
            <td data-testid={ `${dataTestIds[22]}${index}` }>{index + 1}</td>
            <td data-testid={ `${dataTestIds[23]}${index}` }>
              {product.description}
            </td>
            <td data-testid={ `${dataTestIds[24]}${index}` }>
              {product.quantity}
            </td>
            <td data-testid={ `${dataTestIds[25]}${index}` }>
              {product.unitPrice}
            </td>
            <td data-testid={ `${dataTestIds[26]}${index}` }>
              {product.price * product.quantity}
            </td>
            <td data-testid={ `${dataTestIds[27]}${index}` }>
              <button type="button">Remover</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
