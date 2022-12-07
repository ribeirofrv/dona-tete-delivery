// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function ProductBtn() {
  // const history = useHistory();

  // const redirectToProducts = () => {
  //   history.push();
  // };

  return (
    <Link
      data-testid="customer_products__element-navbar-link-products"
      to="/customer/products"
    >
      PRODUTOS
    </Link>
  );
}
