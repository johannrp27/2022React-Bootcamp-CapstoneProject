import { useEffect, useState } from "react"
import { useGridCategories } from "./useGridCategories";
import { useProducts } from "./useProducts";

export const useFilters = (queryParamCategory, currentPage) => {
  const initialFilters = {
    'bed--bath' : false,
    'lighting' : false,
    'kitchen': false,
    'furniture': false,
    'decorate': false,
  }
  if(queryParamCategory &&
    Object.prototype.hasOwnProperty.call(initialFilters, queryParamCategory)) {
    initialFilters[queryParamCategory] = true;
  }

  const { categories, isLoading: isLoadingFilters } = useGridCategories()
  const { products, isLoading: isLoadingProducts, totalPages } = useProducts(currentPage);

  const [filters, setFilters] = useState(initialFilters)
  const [filteredProducts, setFilteredProducts] = useState(products)

  const isAnyActiveFilter = () => {
    return Object.values(filters).some(filter => filter);
  }

  const filterProducts = () => {
    if(!isAnyActiveFilter()) {
      return products
    } else {
      const t = products.filter(({data}) => {
        return filters[data.category.slug];
      })
      return t;
    }
  }
  useEffect(() => {
    const prods = filterProducts()
    setFilteredProducts(prods);
  }, [filters, products, isLoadingProducts])


  return {
    categories,
    isLoadingFilters,
    isLoadingProducts,
    filteredProducts,
    filters,
    setFilters,
    isAnyActiveFilter,
    totalPages,
  }

}