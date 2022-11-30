import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import productsCard from './productsCards';

const Products = () => {
  const history = useHistory();
  const maxCards = 11;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrinksToState(''));
  }, []);
  return (
    <div>
      <Header title="Drinks" search />
      {
        searchBarStatus && <SeachBar />
      }
      <SelectionFilter />
      {
        drinksData && (
          <div className="flex flex-wrap items-center justify-center gap-5">
            {
              drinksData?.length === 1
                ? history.push(`/drinks/${drinksData[0]?.idDrink}`)
                : ([...drinksData]?.splice(0, maxCards)
                  .map((meal, i) => (
                    <productsCard
                      key={ meal.idDrink }
                      idRecipe={ meal.idDrink }
                      id={ i }
                      title={ meal.strDrink }
                      image={ meal.strDrinkThumb }
                      isDrink
                    />
                  )))
            }
          </div>
        )
      }
      <Footer />
    </div>
  );
};

Products.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.fuc,
  }),
}.isRequired;

export default Products;
