import React from 'react'
import PropTypes from 'prop-types';
import Card from './Card';
import styles from '../styles/GridCategories.module.scss';

const GridCategories = ({data}) => {
  const categories = data.results;
  return (
    <div className='mx-4'>
      <h3 className='mb-4'>Our Available Categories</h3>
      <div className={`${styles.grid} gap-5`}>
        {
          categories.map(({id, data: {name, main_image}}) => (
            <Card
              name={name}
              alt={main_image.alt}
              urlImage={main_image.url}
              key={id} />
          ))
        }
      </div>
    </div>
  )
}

GridCategories.propTypes = {
  data: PropTypes.object,
}

export default GridCategories
