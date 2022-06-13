import React, {useState} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GridCategories from './GridCategories'
import ProductList from './ProductList';
import GridProducts from './GridProducts';
import BannerSlider from '../components/BannerSlider'
import featuredData from '../assets/mocks/en-us/featured-products.json'

import styles from '../styles/Home.module.scss'

const Home = () => {
  const [currentView, setCurrentView] = useState('Home')

  return (
    <>
      <Header setCurrentView={setCurrentView} />
      <div className={styles.home}>
        {
          currentView === 'Home' && (
            <div className={`d-flex flex-column p-3 p-md-4 gap-5 ${styles.homepage}`}>
              <BannerSlider />
              <GridCategories />
              <div>
                <h4 className='mb-4'>Discover the high-tier products</h4>
                <GridProducts
                  products={featuredData.results} />
                <button
                  className="btn mt-4"
                  onClick={() => setCurrentView('ProductList')}>View all products</button>
              </div>
            </div>
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
