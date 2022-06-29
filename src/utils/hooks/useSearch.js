
import { useEffect, useState } from "react"
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from "./useLatestAPI";
import axios from 'axios'

export const useSearch = (query) => {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const searchData = async (controller) => {
    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "product")]]'
        )}&q=${encodeURIComponent(
          `[[fulltext(document, "${query}")]]`
        )}&lang=en-us&pageSize=20`,
        {
          signal: controller.signal,
        }
      );
      setResults(data.results)
      setIsLoading(false)
    } catch (err) {
      setResults([])
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
    searchData(controller);

    return () => {
      controller.abort();
    }
  }, [apiRef, isApiMetadataLoading, query])

  return {
    results,
    isLoading,
  }
}