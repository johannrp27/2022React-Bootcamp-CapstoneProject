import React from 'react'
import Sidebar from '../components/Sidebar'
import GridProducts from './GridProducts'
import Pagination from '../components/Pagination'
import { useFilterProducts } from '../utils/hooks/useFilterProducts'
import styles from '../styles/ProductList.module.scss'

const ProductList = () => {

  const {isLoading, filters, filteredProducts, setFilters} = useFilterProducts()

  return (
    <div className={`${styles.layout} d-grid gap-3 mx-4`}>
      <Sidebar
        setFilters={setFilters} />
      <div className='text-center'>
        { isLoading && (<div className={styles.loader} />) }
        { !isLoading && filteredProducts.length === 0 && (<p>No products to show</p>)}
        { !isLoading && filteredProducts.length > 0 &&
          <div className='text-start'>
            <GridProducts
              filters={filters}
              products={filteredProducts}
              />
            <Pagination />
          </div>
        }
      </div>
    </div>
  )
}

export default ProductList