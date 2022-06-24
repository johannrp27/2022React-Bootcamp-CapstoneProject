import React, {useState} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from './ProductList';

import styles from '../styles/Home.module.scss'
import HomeContainer from '../components/HomeContainer';

const Home = () => {
  const [currentView, setCurrentView] = useState('Home')

  return (
    <>
      <Header setCurrentView={setCurrentView} />
      <div className={styles.home}>
        {
          currentView === 'Home' && (
            <HomeContainer />
          )
        }
        {
          currentView === 'ProductList' && (
            <ProductList />
          )
        }
      </div>
      <Footer />
    </>
  );
};

export default Home;
