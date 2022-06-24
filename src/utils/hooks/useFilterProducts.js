import { useEffect, useState } from "react"
import mockResponse from '../../assets/mocks/en-us/products.json'

export const useFilterProducts = () => {
  const products = mockResponse.results;
  const initialFilters = {
    'bed--bath' : false,
    'lighting' : false,
    'kitchen': false,
    'furniture': false,
    'decorate--organize': false,
  }

  const [filters, setFilters] = useState(initialFilters)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [isLoading, setIsLoading] = useState(true);

  const isAnyActiveFilter = () => {
    return Object.values(filters).some(filter => filter);
  }
  const filterProducts = () => {
    if(!isAnyActiveFilter()) {
      return products
    } else {
      return products.filter(({data}) => {
        return filters[data.category.slug];
      })
    }
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const prods = filterProducts()
      setFilteredProducts(prods);
      setIsLoading(false);
    }, 2000)
  }, [filters])

  return {
    filters,
    filteredProducts,
    setFilters,
    isLoading,
  }

}