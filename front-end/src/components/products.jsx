import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import ProductsCards from './productsCards';

function Products() {
  // const history = useHistory();
  const maxCards = 11;
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.reducer.drinksData);

  useEffect(() => {
    dispatch(getProductsToState(''));
  }, []);
  return (
    <div>
      {
        [...productsData]?.splice(0, maxCards)
          .map((product, i) => (
            <ProductsCards
              key={ product.id }
              idProduct={ product.id }
              id={ i }
              name={ product.name }
              price={ product.price }
              urlImage={ product.urlImage }
            />
          ))
      }
    </div>
  );
}

Products.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.fuc,
  }),
}.isRequired;

export default Products;
