import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './context/provider';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/customers/Products';
import Checkout from './pages/customers/Checkout';
import Seller from './pages/seller/Seller';
import SellerDetails from './pages/seller/SellerDetails';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/seller/orders" component={ Seller } />
        <Route exact path="/seller/orders/:id" component={ SellerDetails } />
      </Switch>
    </Provider>
  );
}

export default App;
