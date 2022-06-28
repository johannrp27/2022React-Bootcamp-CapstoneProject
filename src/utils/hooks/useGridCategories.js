import { useEffect, useState } from "react"
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from "./useLatestAPI";
import axios from 'axios'

export const useGridCategories = () => {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getCategories = async (controller) => {
    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "category")]]'
        )}&lang=en-us&pageSize=30`,
        {
          signal: controller.signal,
        }
      );
      setCategories(data.results)
      setIsLoading(false)
    } catch (err) {
      setCategories([])
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
    getCategories(controller);

    return () => {
      controller.abort();
    }
  }, [apiRef, isApiMetadataLoading])

  return {
    categories,
    isLoading,
  }
}