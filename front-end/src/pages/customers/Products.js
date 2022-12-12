import React, { useEffect, useState } from 'react';
import ProductsCards from '../../components/ProductsCards';
// import CarTotalPrice from '../../components/Cart/CarTotalPrice';
import { requestData } from '../../API/requests';
import Header from '../../components/Header/Header';
import ProductBtn from '../../components/Header/ProductBtn';
import OrdersBtn from '../../components/Header/OrdersBtn';

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    const data = await requestData('/customer/products');
    setProducts(data);
  };

  // const total = cart.reduce(
  //   (accumulator, current) => accumulator + current.quantity * current.unitPrice,
  //   0,
  // );

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header
        FirstNavigationLink={ ProductBtn }
        SecondNavegationLink={ OrdersBtn }
        userDataTestId="customer_products__element-navbar-user-full-name"
      />
      <main>
        {products.map(({ name, price, urlImage, id }) => (
          <ProductsCards
            key={ id }
            id={ id }
            name={ name }
            price={ price }
            url={ urlImage }
            cart={ cart }
            setCart={ setCart }
          />
        ))}
      </main>
      {/* <CarTotalPrice /> */}
    </>
  );
}

export default Products;
