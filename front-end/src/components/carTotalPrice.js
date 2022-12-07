import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

function CarTotalPrice() {
  // const history = useHistory();
  const totalPriceData = useSelector((state) => state.reducer.totalPrice);

  useEffect(() => {
    dispatch(getProductsToState(''));
  }, []);
  return (
    <Link
      data-testid="customer_products__checkout-bottom-value"
      to="customer/checkout"
    >
      {totalPriceData}
    </Link>
  );
}

/* Products.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.fuc,
  }),
}.isRequired */

export default CarTotalPrice;
