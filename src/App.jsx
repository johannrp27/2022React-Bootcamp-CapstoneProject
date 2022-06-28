import React from 'react';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';
import ProductList from './views/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';

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
          path="/"
          element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
