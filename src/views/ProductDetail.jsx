/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'
import { useDetailProduct } from '../utils/hooks/useDetailProduct'

const ProductDetail = () => {
  const { id } = useParams()
  const { data, isLoading, isEmpty } = useDetailProduct(id)
  return (
    <>
      {
        isLoading && (
          <div className="d-flex justify-center">
            <div className='loader' />
          </div>)
      }
      {
        !isLoading && isEmpty && <p>Sorry, product not found</p>
      }
      {
        Object.keys(data).length > 0 && (
          <Detail data={data}/>
        )
      }
    </>
  )
}

export default ProductDetail