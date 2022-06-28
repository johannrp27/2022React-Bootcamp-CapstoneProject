import React from 'react';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';
import ProductList from './views/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './views/ProductDetail';

function App() {

  return (
    <div className="App">
      <Header />
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
          path="/"
          element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
