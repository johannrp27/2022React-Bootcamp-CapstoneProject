import React from 'react'
import PropTypes from 'prop-types';
import styles from '../styles/GridFeatured.module.scss';
import CardFeatured from '../components/CardFeatured';

const GridFeatured = ({data}) => {
  const featuredProducts = data.results;
  return (
    <>
      <h4 className='mb-4'>Discover the high-tier products</h4>
      <div className={`${styles.grid} gap-5`}>
        {
          featuredProducts.map(({data}) => (
            <CardFeatured
              urlImage={data.mainimage.url}
              alt={data.mainimage.alt}
              name={data.name}
              price={data.price}
              shortDescription={data.short_description}
              stock={data.stock}
              key={data.sku} />
          ))
        }
      </div>
    </>
  )
}

GridFeatured.propTypes = {
  data: PropTypes.object,
}

export default GridFeatured