import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';

export default function OrderCard({ testId, orders }) {
  const location = useLocation();

  const redirect = (order) => {
    const url = location.pathname;
    console.log('🚀 ~ file: OrderCard.js:11 ~ redirect ~ url', url);
    if (url === '/customer/orders') {
      return `/customer/orders/${order.id}`;
    }
    if (url === '/seller/orders') {
      return `/seller/orders/${order.id}`;
    }
  };

  return (
    <main>
      {
        orders.map((order) => (
          <Link to={ () => redirect(order) } key={ order.deliveryNumber }>
            <h1
              data-testid={ `${testId}_orders__element-order-id-${order.id}` }
            >
              { order.id }
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
                { moment(order.saleDate).format('DD/MM/YYYY') }
              </h3>
              <h3
                data-testid={ `${testId}_orders__element-card-price-${order.id}` }
              >
                { order.totalPrice.replace(/\./, ',')}
              </h3>
            </div>
            {testId === 'seller' && (
              <h2
                data-testid={ `${testId}_orders__element-card-address-${order.id}` }
              >
                { order.deliveryAddress }
              </h2>)}
          </Link>
        ))
      }
    </main>
  );
}

OrderCard.propTypes = {
  testId: PropTypes.string.isRequired,
  orders: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
