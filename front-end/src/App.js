import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './context/provider';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/customers/Products';
import Checkout from './pages/customers/Checkout';
import CustomerDetails from './pages/customers/CustomerDetails';
import Seller from './pages/seller/Seller';
import SellerDetails from './pages/seller/SellerDetails';
import AdminManage from './pages/admin/AdminManage';
import Customer from './pages/customers/Customer';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/customer/orders" component={ Customer } />
        <Route exact path="/customer/orders/:id" component={ CustomerDetails } />
        <Route exact path="/seller/orders" component={ Seller } />
        <Route exact path="/seller/orders/:id" component={ SellerDetails } />
        <Route exact path="/admin/manage" component={ AdminManage } />
      </Switch>
    </Provider>
  );
}

export default App;
