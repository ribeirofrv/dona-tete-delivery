import React from 'react';
import PropTypes from 'prop-types';

export default function OrderCard({ testId, orders }) {
  return (
    <main>
      {
        orders.map((order) => (
          <div key={ order.deliveryNumber }>
            <h1
              data-testid={ `${testId}_orders__element-order-id-${order.id}` }
            >
              { order.deliveryNumber }
            </h1>
            <div
              data-testid={ `${testId}_orders__element-delivery-status-${order.id}` }
            >
              { order.status }
            </div>
            <div>
              <h3
                data-testid={ `${testId}_orders__element-order-date-${order.id}` }
              >
                { order.saleDate }
              </h3>
              <h3
                data-testid={ `${testId}_orders__element-card-price-${order.id}` }
              >
                { order.totalPrice }
              </h3>
            </div>
            <h2
              data-testid={ `${testId}_orders__element-card-price-${order.id}` }
            >
              { order.deliveryAddress }
            </h2>
          </div>
        ))
      }
    </main>
  );
}

OrderCard.propTypes = {
  testId: PropTypes.string.isRequired,
  orders: PropTypes.shape([]).isRequired,
};
