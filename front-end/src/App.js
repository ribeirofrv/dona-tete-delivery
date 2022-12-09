import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Seller from './pages/seller/Seller';
import Products from './pages/customers/Products';
import Checkout from './pages/customers/Checkout';
import SellerDetails from './pages/seller/SellerDetails';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/seller/orders" component={ Seller } />
      <Route exact path="/seller/orders/:id" component={ SellerDetails } />
    </Switch>
  );
}

export default App;
