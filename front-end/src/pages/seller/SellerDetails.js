import React from 'react';
import PropTypes from 'prop-types';

export default function SellerDetails({ match: { params: { id } } }) {
  return (
    <div>
      SellerDetails:
      {' '}
      {id}
      {' '}

    </div>
  );
}

SellerDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
