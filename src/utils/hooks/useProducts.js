import { useEffect, useState } from "react"
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from "./useLatestAPI";
import axios from 'axios'

export const useProducts = (currentPage) => {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(0)

  const getProducts = async (controller) => {
    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "product")]]'
        )}&lang=en-us&page=${currentPage}&pageSize=12`,
        {
          signal: controller.signal,
        }
      );
      setTotalPages(data.total_pages);
      setProducts(data.results)
      setIsLoading(false)
    } catch (err) {
      setProducts([])
      setIsLoading(false)
      console.error(err);
    }
  }

  useEffect(() => {
    setIsLoading(true)

    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();
    getProducts(controller);

    return () => {
      controller.abort();
    }
  }, [apiRef, isApiMetadataLoading, currentPage])

  return {
    products,
    isLoading,
    totalPages,
  }
}