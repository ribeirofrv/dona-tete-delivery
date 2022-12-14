import PropTypes from 'prop-types';
import { useState } from 'react';
import dataTestIds from '../utils/dataTestIds';

export default function Table() {
  const storageCart = JSON.parse(localStorage.getItem('cart'));
  const [cart, updateCart] = useState(storageCart);

  const removeItem = (name) => {
    const newList = storageCart.filter((item) => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(newList));
  };

  const updateLocalStorage = () => {
    const currentStore = JSON.parse(localStorage.getItem('cart'));
    updateCart(currentStore);
  };

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
        {cart?.map((product, index) => (
          <tr key={ index }>
            <td data-testid={ `${dataTestIds[22]}${index}` }>{index + 1}</td>
            <td data-testid={ `${dataTestIds[23]}${index}` }>{product.name}</td>
            <td data-testid={ `${dataTestIds[24]}${index}` }>
              {product.quantity}
            </td>
            <td data-testid={ `${dataTestIds[25]}${index}` }>
              {product.unitPrice}
            </td>
            <td data-testid={ `${dataTestIds[26]}${index}` }>
              {product.subTotal}
            </td>
            <td data-testid={ `${dataTestIds[27]}${index}` }>
              <button
                type="button"
                id={ product.name }
                onClick={ ({ target }) => {
                  removeItem(target.id);
                  updateLocalStorage();
                } }
              >
                Remover
              </button>
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
