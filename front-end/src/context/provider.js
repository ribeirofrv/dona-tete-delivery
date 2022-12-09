import React from 'react';
import PropTypes from 'prop-types';
import storage from './context';

function Provider({ children }) {
  // const [product, setProduct] = useState({});

  /* const setItems = () => {
    setProduct({});
  }; */

  const foo = useMemo(() => ({ cart, setCartItems }), []);
  return (

    <storage.Provider
      value={ foo }
    >
      { children }
    </storage.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
