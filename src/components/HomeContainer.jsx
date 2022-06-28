import React from 'react'
import GridCategories from '../views/GridCategories'
import GridProducts from '../views/GridProducts'
import BannerSlider from './BannerSlider'
import PropTypes from 'prop-types'

const HomeContainer = ({setCurrentView}) => {
  return (
    <div className={'d-flex flex-column p-3 p-md-4 gap-5'}>
      <BannerSlider />
      <GridCategories />
      <div>
        <h4 className='mb-4'>Discover the high-tier products</h4>
        <GridProducts/>
        <button
          className="btn mt-4"
          onClick={() => setCurrentView('ProductList')}>View all products</button>
      </div>
    </div>
  )
}
HomeContainer.propTypes = {
  setCurrentView: PropTypes.func,
}

export default HomeContainer