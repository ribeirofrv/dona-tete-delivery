import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeCard = ({ id, name, price, url_image }) => (
    <div data-testid={ `customer_products__element-card-${id}` }>
      <figure>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ url_image }
          alt={ price }
        />
      </figure>
      <div>
      <h2 data-testid={ `customer_products__element-card-price-${id}`} >{price}</h2>
      </div>
    </div>
);

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url_image: PropTypes.string.isRequired,
};

export default RecipeCard;
