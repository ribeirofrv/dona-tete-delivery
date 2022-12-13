import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import storage from '../context/context';

function ProductsCard({ name, price, urlImage, id }) {
  const [unity, setUnity] = useState(0);
  const [product, setProduct] = useState({});
  const { newItem } = useContext(storage);

  /* const getCartItem = () => {
    const cartItens = JSON.parse(localStorage.getItem('cart'));
    return cartItens;
  };

  const saveCartItem = (item) => {
    localStorage.setItem('cart', JSON.stringify(item));
  };

  const newItem = (item) => {
    const getCartProducts = getCartItem() || [];
    const itemAlreadySave = getCartProducts.find(
      (productItem) => productItem.productId === item.productId,
    );
    if (getCartProducts.length === 0) {
      return saveCartItem([item]);
    }

    if (itemAlreadySave) {
      getCartProducts.forEach((arrayItem) => {
        if (arrayItem.productId === item.productId) {
          arrayItem.quantity = item.quantity;
          arrayItem.subTotal = item.subTotal;
        }
      });
      saveCartItem(getCartProducts);
    } else {
      getCartProducts.push(item);
      saveCartItem(getCartProducts);
    }
  }; */

  useEffect(() => {
    if (product.productId) {
      newItem(product);
      /* const cart = getCartItem();
        const totalValue = cart.reduce((acc, crr) => acc + Number(crr.subTotal.replace(/,/, '.'), 0), 0);
        setTotal(totalValue.toFixed(2)); */
    }
    /* if (getCartItem()) {
        const cart = getCartItem();
        const totalValue = cart.reduce((acc, crr) => acc + Number(crr.subTotal.replace(/,/, '.'), 0), 0);
        setTotal(totalValue.toFixed(2));
      } */
  }, [product]);

  const addInCart = () => {
    setUnity(unity + 1);
    setProduct({
      name,
      productId: id,
      quantity: unity + 1,
      unitPrice: price.replace(/\./, ','),
      subTotal: parseFloat(price * (unity + 1))
        .toFixed(2)
        .replace(/\./, ','),
    });
  };

  const removeInCart = () => {
    if (unity !== 0) {
      setUnity(unity - 1);
      setProduct({
        name,
        productId: id,
        quantity: unity - 1,
        unitPrice: price,
        subTotal: parseFloat(price * (unity - 1)).toFixed(2),
      });
    }
  };

  const handleChange = ({ target }) => {
    const convertValue = Number(target.value);

    if (Number.isNaN(convertValue)) target.value = unity;

    setProduct({
      name,
      productId: id,
      quantity: convertValue,
      unitPrice: price,
      subTotal: parseFloat(price * convertValue).toFixed(2),
    });
    setUnity(Number(target.value));
  };

  return (
    <div data-testid={ `customer_products__element-card-${id}` }>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ `${name}: ${price.replace(/\./, ',')}` }
      />
      <div>
        <h2 data-testid={ `customer_products__element-card-title-${id}` }>
          {name}
        </h2>
        <h2 data-testid={ `customer_products__element-card-price-${id}` }>
          {price.replace(/\./, ',')}
        </h2>
      </div>
      <div className="counter">
        <button
          type="button"
          name={ `button-card-rm-item-${id}` }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ removeInCart }
        >
          -
        </button>
        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          name="number"
          value={ unity }
          onChange={ handleChange }
        />
        <button
          type="button"
          name={ `button-card-add-item-${id}` }
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ addInCart }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
  urlImage: PropTypes.string,
  cart: PropTypes.arrayOf(PropTypes.object),
  // setCart: PropTypes.func,
}.isRequired;

ProductsCard.defaultProps = {
  urlImage: '',
};

export default ProductsCard;
