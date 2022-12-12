import React, { useEffect, useState } from 'react';
import ProductsCards from '../../components/ProductsCards';
import CarTotalPrice from '../../components/CarTotalPrice';
import { requestData } from '../../API/requests';
import Header from '../../components/Header/Header';
import ProductBtn from '../../components/Header/ProductBtn';
import OrdersBtn from '../../components/Header/OrdersBtn';
import Provider from '../../context/provider';

function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await requestData('/customer/products');
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Provider>
      <div>
        <Header
          FirstNavigationLink={ ProductBtn }
          SecondNavegationLink={ OrdersBtn }
          userDataTestId="customer_products__element-navbar-user-full-name"
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
        <CarTotalPrice />
      </div>
    </Provider>
  );
}

export default Products;
