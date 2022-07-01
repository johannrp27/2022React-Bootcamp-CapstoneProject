import { useEffect, useState } from "react"
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from "./useLatestAPI";
import axios from 'axios'

export const useFeaturedProducts = () => {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getProducts = async (controller) => {
    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/documents/search?ref=${
              apiRef
            }&q=${
              encodeURIComponent('[[at(document.type, "product")]]')
            }&q=${
              encodeURIComponent('[[at(document.tags, ["Featured"])]]')
            }&lang=en-us&pageSize=16`,
        {
          signal: controller.signal,
        }
      );
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
  }, [apiRef, isApiMetadataLoading])

  return {
    products,
    isLoading,
  }
}