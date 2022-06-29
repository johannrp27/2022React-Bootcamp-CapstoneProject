import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'
import styles from '../styles/Search.module.scss'

const Searchitems = ({results}) => {
  return (
    <>
      <h5 className='mb-4'>Results:</h5>
      <div className={styles.results}>
        {
          results.map(({id, data}) => (
            <ProductCard
              id={id}
              key={id}
              name={data.name}
              price={data.price}
              shortDescription={data.short_description}
              sku={data.sku}
              stock={data.stock}
              urlImage={data.mainimage.url}
              alt={data.mainimage.alt}
            />
          ))
        }
      </div>
    </>
  )
}
Searchitems.propTypes = {
  results: PropTypes.array,
}
export default Searchitems