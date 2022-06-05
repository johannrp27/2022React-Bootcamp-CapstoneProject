import React from 'react'
import Grid from '../components/Grid'
import Slider from '../components/Slider'
import categoriesData from '../assets/mocks/en-us/product-categories.json'
import styles from '../styles/HomePage.module.scss'
/**
2.1. A Slider to display the featured banners from this mock file

2.3. A Grid of Featured Products from this mock file. For each element on this grid,
  you should show at least the main image of the product, its name, category, and price.
  */

const HomePage = () => {
  return (
    <div className={`d-flex flex-column pt-5 ${styles.homepage}`}>
      <div>
        <Slider />
      </div>
      <div>
        <Grid data={categoriesData} />
      </div>
      <div>
        Grid featured prods
      </div>
    </div>
  )
}

export default HomePage
