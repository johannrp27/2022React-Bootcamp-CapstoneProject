import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import GridCategories from './GridCategories'
import GridFeatured from './GridFeatured'
import BannerSlider from '../components/BannerSlider'

import categoriesData from '../assets/mocks/en-us/product-categories.json'
import featuredData from '../assets/mocks/en-us/featured-products.json'
import bannersData from '../assets/mocks/en-us/featured-banners.json'

import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <>
      <Header />

      <div className="">
        <div className={`d-flex flex-column p-3 p-md-4 gap-5 ${styles.homepage}`}>
          <BannerSlider data={bannersData} />
          <GridCategories data={categoriesData} />
          <GridFeatured data={featuredData} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
