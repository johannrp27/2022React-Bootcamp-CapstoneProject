import React, { useEffect, useState } from 'react'
import appContext from './context'
import PropTypes from 'prop-types';

const AppState = ({ children }) => {

  const initialState = {
    countInCart: 0,
    productsInCart : new Map(),
  }
  const [appData, setAppData] = useState(initialState)

  const addProductToCart = (id, amount = 1) => {
    const newMap = appData.productsInCart;
    newMap.has(id)
    ?  newMap.delete(id)
    : newMap.set(id, amount)
    setAppData(old => ({
        ...old,
        productsInCart: newMap,
    }))
  }
  useEffect(() => {
    setAppData(old => ({
      ...old,
      countInCart: appData.productsInCart.size,
    }))
  }, [appData.productsInCart.size])

  return (
    <appContext.Provider
      value={{
        ...appData,
        appData,
        setAppData,
        addProductToCart,
      }}
    >
      { children }
    </appContext.Provider>
  )
}
AppState.propTypes = {
  children: PropTypes.element,
}
export default AppState
