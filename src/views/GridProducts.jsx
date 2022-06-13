import React from 'react'
import PropTypes from 'prop-types';
import styles from '../styles/GridProducts.module.scss';
import CardFeatured from '../components/CardFeatured';

const GridProducts = ({products}) => {
  return (
    <div className={`d-grid ${styles.grid} gap-3`}>
      {
        products.map(({data}) => (
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
  )
}

GridProducts.propTypes = {
  products: PropTypes.array.isRequired,
}

export default GridProducts