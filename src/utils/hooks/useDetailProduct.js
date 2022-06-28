import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useDetailProduct(productId) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [productDetail, setProductDetail] = useState(() => ({
    data: {},
    isLoading: true,
    isEmpty: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[:d=at(document.id,"${productId}")]]`
          )}`,
          {
            signal: controller.signal,
          }
        );
        const { results: [result] } = await response.json();
        setProductDetail({ data: result.data, isLoading: false, isEmpty: false });
      } catch (err) {
        setProductDetail({ data: {}, isLoading: false, isEmpty:true });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return productDetail;
}
