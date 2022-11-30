import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import productsCard from './productsCards';
import SelectionFilter from './SelectionFilter';

const Drinks = () => {
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
      <Header title="Drinks" search />
      {
        searchBarStatus && <SeachBar />
      }
      <SelectionFilter />
      {
        productsData && (
          <div>
            {
              productsData?.length === 1
                ? history.push(`/drinks/${productsData[0]?.idDrink}`)
                : ([...productsData]?.splice(0, maxCards)
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

Drinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.fuc,
  }),
}.isRequired;

export default Drinks;
