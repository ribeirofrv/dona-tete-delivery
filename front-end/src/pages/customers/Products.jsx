import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import ProductsCards from '../../components/productsCards';
import NavBar from '../../components/NavBar';
import CarTotalPrice from '../../components/carTotalPrice';

function Products() {
  const [products, setProducts] = useState([]);
  // const history = useHistory();
  const maxCards = 11;
  // const dispatch = useDispatch();
  const productsData = useSelector((state) => state.reducer.products);

  useEffect(() => {
    const endpoint = '/customers/products';

    if (!products.length) {
      requestData(endpoint)
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => console.log(error));
    }
  });
  return (
    <div>
      <NavBar />
      <div>
        {
          [...productsData]?.splice(0, maxCards)
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
