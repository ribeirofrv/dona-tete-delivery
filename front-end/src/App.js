import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Products from './pages/customers/Products';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" element={ <Products /> } />
    </Switch>
  );
}

export default App;
