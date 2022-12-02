import React, { useEffect, useState } from 'react';
import ProductsCards from '../../components/productsCards';
import NavBar from '../../components/NavBar';
import CarTotalPrice from '../../components/carTotalPrice';
import { requestData } from '../../API/requests';

function Products() {
  const [products, setProducts] = useState([]);
  const maxCards = 11;

  const getProducts = async () => {
    const data = await requestData();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        {
          [...products]?.splice(0, maxCards)
            .map((product, i) => (
              <ProductsCards
                key={ product.id }
                idProduct={ product.id }
                id={ i }
                name={ product.name }
                price={ product.price }
                urlImage={ product.urlImage }
              />
            ))
        }
      </div>
      <CarTotalPrice />
    </div>
  );
}

/* Products.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.fuc,
  }),
}.isRequired */

export default Products;
