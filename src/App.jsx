import React from 'react';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';
import ProductList from './views/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './views/ProductDetail';
import SearchResults from './views/SearchResults';
import AppState from './context/state';
import ShoppingCart from './views/ShoppingCart';

function App() {

  return (
    <AppState>
      <div className="App">
        <Header />
        <div className='headerSpace'>
          <Routes>
            <Route
              path="/home"
              element={<Home />} />
            <Route
              path="/products"
              element={<ProductList />} />
            <Route
              path="/products/:id"
              element={<ProductDetail />} />
            <Route
              path="/search"
              element={<SearchResults />} />
            <Route
              path="/cart"
              element={<ShoppingCart />} />
            <Route
              path="/"
              element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AppState>
  );
}

export default App;
