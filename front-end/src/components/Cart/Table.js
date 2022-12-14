import PropTypes from 'prop-types';
import { useState, useContext, useEffect } from 'react';
import Storage from '../../context/context';
import dataTestIds from '../utils/dataTestIds';

export default function Table() {
  const { setTotal } = useContext(Storage);
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

  useEffect(() => {
    const totalValue = storageCart.reduce((acc, crr) => {
      const { subTotal } = crr;
      const parsedSubTotal = +(subTotal.replace(',', '.'));
      return (acc + parsedSubTotal);
    }, 0);
    const valueFixed = totalValue.toFixed(2);
    setTotal(valueFixed);
  }, [cart]);

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
            <td data-testid={ `${dataTestIds[23]}${index}` }>{index + 1}</td>
            <td data-testid={ `${dataTestIds[24]}${index}` }>{product.name}</td>
            <td data-testid={ `${dataTestIds[25]}${index}` }>
              {product.quantity}
            </td>
            <td data-testid={ `${dataTestIds[26]}${index}` }>
              {product.unitPrice}
            </td>
            <td data-testid={ `${dataTestIds[27]}${index}` }>
              {product.subTotal}
            </td>
            <td>
              <button
                type="button"
                id={ product.name }
                data-testid={ `${dataTestIds[28]}${index}` }
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
