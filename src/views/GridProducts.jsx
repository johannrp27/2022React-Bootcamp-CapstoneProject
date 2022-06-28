import React from 'react'
import styles from '../styles/GridProducts.module.scss';
import CardFeatured from '../components/CardFeatured';
import PropTypes from 'prop-types';

const GridProducts = ({products}) => {
  return (
    <div className={`d-grid ${styles.grid} gap-3`}>
      {
        products.map(({id, data}) => (
          <CardFeatured
            id={id}
            sku={data.sku}
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
  products: PropTypes.array,
}

export default GridProducts