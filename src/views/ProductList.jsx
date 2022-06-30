import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import GridProducts from './GridProducts'
import Pagination from '../components/Pagination'
import styles from '../styles/ProductList.module.scss'
import { useFilters } from '../utils/hooks/useFilters';
import { useSearchParams } from 'react-router-dom'

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const {
    filters,
    setFilters,
    categories,
    totalPages,
    isLoadingFilters,
    isLoadingProducts,
    filteredProducts,
    isAnyActiveFilter,
  } = useFilters(searchParams.get('category'), currentPage)


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
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </div>
        }
      </div>
    </div>
  )
}

export default ProductList