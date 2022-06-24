import React from 'react'
import categoriesData from '../assets/mocks/en-us/product-categories.json'
import PropTypes from 'prop-types';
import CardCategory from '../components/CardCategory';

import styles from '../styles/GridCategories.module.scss';

const GridCategories = () => {
  return (
    <>
      <h4 className='mb-4'>Our Available Categories</h4>
      <div className={`d-grid gap-2 ${styles.grid}`}>
        {
          categoriesData.results.map(({id, data: {name, main_image}}) => (
            <CardCategory
              name={name}
              alt={main_image.alt}
              urlImage={main_image.url}
              key={id} />
          ))
        }
      </div>
    </>
  )
}

GridCategories.propTypes = {
  data: PropTypes.object,
}

export default GridCategories
