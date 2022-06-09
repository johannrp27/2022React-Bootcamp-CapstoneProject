import React from 'react'
import categoriesData from '../assets/mocks/en-us/product-categories.json'
import featuredData from '../assets/mocks/en-us/featured-products.json'
import bannersData from '../assets/mocks/en-us/featured-banners.json'
import GridCategories from './GridCategories'
import GridFeatured from './GridFeatured'
import BannerSlider from '../components/BannerSlider'
import styles from '../styles/HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={`d-flex flex-column p-3 p-md-4 gap-5 ${styles.homepage}`}>
      <BannerSlider data={bannersData} />
      <GridCategories data={categoriesData} />
      <GridFeatured data={featuredData} />
    </div>
  )
}

export default HomePage
