import React from 'react'
import styles from '../styles/GridProducts.module.scss';
import CardFeatured from '../components/CardFeatured';
import { useProducts } from '../utils/hooks/useProducts';

const GridProducts = () => {
  const { products, isLoading } = useProducts();
  console.log(products);
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

GridProducts.propTypes = {
}

export default GridProducts