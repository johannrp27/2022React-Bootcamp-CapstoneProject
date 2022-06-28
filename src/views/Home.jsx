import React from 'react'
import BannerSlider from '../components/BannerSlider'
import GridCategories from './GridCategories'
import GridProducts from './GridProducts'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../utils/hooks/useProducts'

import PropTypes from 'prop-types'

const Home = () => {
  const { products, isLoading } = useProducts();
  let navigate = useNavigate();

  function viewAll() {
    navigate("/products", { replace: true });
  }

  return (
    <div className={'d-flex flex-column px-md-4 py-0 gap-5'}>
      <BannerSlider />
      <GridCategories />
      <div>
        <h4 className='mb-4'>Discover the high-tier products</h4>
        <GridProducts
          products={products}
          isLoading={isLoading} />
        <button
          className="btn mt-4"
          onClick={viewAll}>View all products</button>
      </div>
    </div>
  )
}
Home.propTypes = {
  setCurrentView: PropTypes.func,
}

export default Home