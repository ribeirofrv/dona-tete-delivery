import React, { useEffect, useState } from 'react';
import ProductsCards from '../../components/ProductsCards';
// import CarTotalPrice from '../../components/carTotalPrice';
import { requestData } from '../../API/requests';
import Header from '../../components/Header';
import ProductBtn from '../../components/ProductBtn';
import OrdersBtn from '../../components/OrdersBtn';

function Products() {
  const [products, setProducts] = useState([]);
  // const maxCards = 11;

  const getProducts = async () => {
    const data = await requestData('/customer/products');
    console.log('🚀 ~ file: Products.js:13 ~ getProducts ~ data', data);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Header
        FirstNavigationLink={ ProductBtn }
        SecondNavegationLink={ OrdersBtn }
      />
      <div>
        {
          products.map(({ name, price, urlImage, id }, index) => (
            <ProductsCards
              key={ index }
              id={ id }
              name={ name }
              price={ price }
              url={ urlImage }
            />
          ))
        }
      </div>
      {/* <CarTotalPrice /> */}
    </div>
  );
}

/* Products.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.fuc,
  }),
}.isRequired */

export default Products;