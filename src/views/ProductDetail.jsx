/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDetailProduct } from '../utils/hooks/useDetailProduct'

const ProductDetail = () => {
  const { id } = useParams()
  const { data, isLoading, isEmpty } = useDetailProduct(id)
  return (
    <>
      {
        isLoading && <p>Loading...</p>
      }
      {
        !isLoading && isEmpty && <p>Sorry, product not found</p>
      }
      {
        Object.keys(data).length > 0 && (
          <div>
            hey
          </div>
        )
      }
    </>
  )
}

export default ProductDetail