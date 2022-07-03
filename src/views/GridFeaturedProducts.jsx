import React from 'react'
import styles from '../styles/GridProducts.module.scss';
import ProductCard from '../components/ProductCard';
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts';

const GridFeaturedProducts = () => {
  const { products, isLoading } = useFeaturedProducts();
  return (
    <>
      {
        isLoading
        ? (
          <div className="d-flex justify-center">
            <div className='loader' />
          </div>
        )
        :(
          <div className={`d-grid ${styles.grid} gap-3`}>
            {
              products.map(({id, data}) => (
                <ProductCard
                  data={data}
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
    </>
  )
}

GridFeaturedProducts.propTypes = {
}

export default GridFeaturedProducts