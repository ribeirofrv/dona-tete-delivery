import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Header from '../../components/Header';
import dataTestIds from '../../components/utils/dataTestIds';
import DetailsTable from '../../components/DetailsTable';
import { requestData, requestUpdate } from '../../API/requests';
import SellerBtn from '../../components/Header/SellerBtn';

export default function SellerDetails({ match: { params: { id } } }) {
  const [sale, setSale] = useState();
  const [saleStatus, setSaleStatus] = useState('Pendente');

  const requestSale = async () => {
    requestData(`/seller/orders/${id}`)
      .then((data) => {
        setSale(data);
        setSaleStatus(data.status);
      });
  };

  const updateStatus = async (status) => {
    requestUpdate(`/seller/orders/${id}`, { status })
      .then((data) => setSaleStatus(data));
  };

  useEffect(() => {
    requestSale();
  }, []);
  return (
    <main>
      <Header
        FirstNavigationLink={ SellerBtn }
        SecondNavegationLink={ null }
        userDataTestId="customer_products__element-navbar-user-full-name"
      />
      {sale && (
        <section>
          <div>
            <p
              data-testid={ `${dataTestIds[54]}` }
            >
              { sale.id }
            </p>
            <p
              data-testid={ `${dataTestIds[56]}` }
            >
              { moment(sale.saleDate).format('DD/MM/YYYY')}
            </p>
            <p
              data-testid={ `${dataTestIds[55]}` }
            >
              { saleStatus }
            </p>
            <button
              type="button"
              data-testid={ `${dataTestIds[57]}` }
              disabled={ saleStatus !== 'Pendente' }
              onClick={ () => updateStatus('Preparando') }
            >
              PREPARAR PEDIDO
            </button>
            <button
              type="button"
              data-testid={ `${dataTestIds[58]}` }
              disabled={ saleStatus !== 'Preparando' }
              onClick={ () => updateStatus('Em Trânsito') }
            >
              SAIU PARA ENTREGA
            </button>
          </div>
          <section>
            <DetailsTable data={ sale.products } />
          </section>
          <div
            data-testid={ `${dataTestIds[64]}` }
          >
            { sale.totalPrice.replace('.', ',') }
          </div>
        </section>
      )}

    </main>
  );
}

SellerDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
