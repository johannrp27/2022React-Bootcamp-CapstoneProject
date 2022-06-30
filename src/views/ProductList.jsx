import React from 'react'
import Sidebar from '../components/Sidebar'
import GridProducts from './GridProducts'
import Pagination from '../components/Pagination'
import styles from '../styles/ProductList.module.scss'
import { useFilters } from '../utils/hooks/useFilters';


const ProductList = () => {
  const {
    filters,
    setFilters,
    categories,
    isLoadingFilters,
    isLoadingProducts,
    filteredProducts,
    isAnyActiveFilter,
  } = useFilters()

  return (
    <div className={`${styles.layout} d-grid gap-3 mx-4`}>
      <Sidebar
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        isAnyActiveFilter={isAnyActiveFilter}
        isLoading={isLoadingFilters} />
      <div className='text-center'>
        { isLoadingProducts && (<div className='loader' />) }
        { !isLoadingProducts && filteredProducts.length === 0 && (<p>No products to show</p>)}
        { !isLoadingProducts && filteredProducts.length > 0 &&
          <div className='text-start'>
            <GridProducts
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