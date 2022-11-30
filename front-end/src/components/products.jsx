import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import productsCard from './productsCards';

function Products() {
  const history = useHistory();
  const maxCards = 12;
  const dispatch = useDispatch();
  const searchBarStatus = useSelector((state) => state.reducer.isSearchBar);
  const productsData = useSelector((state) => state.reducer.drinksData);

  useEffect(() => {
    dispatch(getDrinksToState(''));
  }, []);
  return (
    <div>
      {
        productsData && (
          <div>
            {
              ([...productsData]?.splice(0, maxCards)
                .map((product, i) => (
                  <productsCard
                    key={ product.idDrink }
                    idRecipe={ product.idDrink }
                    id={ i }
                    title={ product.strDrink }
                    image={ product.strDrinkThumb }
                  />
                )))
            }
          </div>
        )
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
