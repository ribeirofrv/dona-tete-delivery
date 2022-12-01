import { Router, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Route path="customer/products" element={ <Products /> } />
      <div className="App">
        <span className="logo">TRYBE</span>
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object>
      </div>
    </Router>
  );
}

export default App;
