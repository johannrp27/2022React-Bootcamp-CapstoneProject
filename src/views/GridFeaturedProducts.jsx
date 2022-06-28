import React from 'react'
import styles from '../styles/GridProducts.module.scss';
import CardFeatured from '../components/CardFeatured';
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts';

const GridFeaturedProducts = () => {
  const { products, isLoading } = useFeaturedProducts();

  return (
    <>
      {
        isLoading && (
          <div>Loading</div>
        )
      }
      {
        !isLoading && (
          <div className={`d-grid ${styles.grid} gap-3`}>
            {
              products.map(({data}) => (
                <CardFeatured
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
    </>
  )
}

GridFeaturedProducts.propTypes = {
}

export default GridFeaturedProducts