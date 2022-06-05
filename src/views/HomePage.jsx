import React from 'react'
import categoriesData from '../assets/mocks/en-us/product-categories.json'
import featuredData from '../assets/mocks/en-us/featured-products.json'
import bannersData from '../assets/mocks/en-us/featured-banners.json'
import GridCategories from './GridCategories'
import GridFeatured from './GridFeatured'
import BannerSlider from '../components/BannerSlider'
import styles from '../styles/HomePage.module.scss'
/**
2.1. A Slider to display the featured banners from this mock file

2.3. A Grid of Featured Products from this mock file. For each element on this grid,
  you should show at least the main image of the product, its name, category, and price.
  */

const HomePage = () => {
  return (
    <div className={`d-flex flex-column p-5 gap-5 ${styles.homepage}`}>
      <div>
        <BannerSlider data={bannersData} />
      </div>
      <div>
        <GridCategories data={categoriesData} />
      </div>
      <div>
        <GridFeatured data={featuredData} />
      </div>
    </div>
  )
}

export default HomePage
