import { useEffect, useState } from "react"
import { useGridCategories } from "./useGridCategories";
import { useProducts } from "./useProducts";

export const useFilters = () => {
  const initialFilters = {
    'bed--bath' : false,
    'lighting' : false,
    'kitchen': false,
    'furniture': false,
    'decorate': false,
  }
  const { categories, isLoading: isLoadingFilters } = useGridCategories()
  const { products, isLoading: isLoadingProducts } = useProducts();

  const [filters, setFilters] = useState(initialFilters)
  const [filteredProducts, setFilteredProducts] = useState(products)

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
    setFilteredProducts(products)
  }, [products])


  useEffect(() => {
    const prods = filterProducts()
    setFilteredProducts(prods);
  }, [filters])


  return {
    categories,
    isLoadingFilters,
    isLoadingProducts,
    filteredProducts,
    filters,
    setFilters,
    isAnyActiveFilter,
  }

}