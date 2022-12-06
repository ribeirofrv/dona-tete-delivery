import React from 'react';
import PropTypes from 'prop-types';
import storage from '../context/context';

function ProductsCard({ id, name, price, urlImage }) {
  const [unity, setUnity] = useState(0);
  const [product, setProduct] = useState({});
  const { newItem, cart } = useContext(storage);

  const addToCart = () => {
    setUnity(unity + 1);
    setProduct({
      name,
      productId: id,
      quantity: unity + 1,
      unitPrice: price.replace(/\./, ','),
      subTotal: parseFloat(price * (unity + 1)).toFixed(2).replace(/\./, ','),
    });
  };

  const removeOfCart = () => {
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

  useEffect(() => {
    const productFind = cart.find((({ productId }) => productId === id));
    if (productFind) setUnity(productFind.quantity);
  }, []);

  useEffect(() => {
    if (product.productId) {
      newItem(product);
    }
  }, [product]);

  const handleChange = ({ target }) => {
    const convertValue = Number(target.value);

    if (Number.isNaN(convertValue)) {
      target.value = unity;
    } else {
      setProduct({
        name,
        productId: id,
        quantity: convertValue,
        unitPrice: price,
        subTotal: parseFloat(price * convertValue).toFixed(2),
      });
      setUnity(Number(target.value));
    }
  };
  return (
    <div data-testid={ `customer_products__element-card-${id}` }>
      <figure>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt={ price }
        />
      </figure>
      <div>
        <h2 data-testid={ `customer_products__element-card-title-${id}` }>{name}</h2>
        <h2 data-testid={ `customer_products__element-card-price-${id}` }>{price}</h2>
      </div>
      <div className="counter">
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ removeOfCart }
          type="button"
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="text"
          name="number"
          value={ unity }
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ addToCart }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  urlImage: PropTypes.string.isRequired,
};

export default ProductsCard;
