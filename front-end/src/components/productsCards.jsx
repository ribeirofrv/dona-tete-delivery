import React from 'react';
import PropTypes from 'prop-types';

function ProductsCard({ id, name, price, urlImage }) {
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
