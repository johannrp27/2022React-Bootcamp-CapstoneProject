import React, { useEffect, useState } from 'react'
import appContext from './context'
import PropTypes from 'prop-types';

const AppState = ({ children }) => {

  const initialState = {
    countInCart: 0,
    productsInCart : new Map(),
  }
  const [appData, setAppData] = useState(initialState)

  const addProductToCart = (id, data, amount = 1) => {
    const newMap = appData.productsInCart;
    newMap.has(id)
    ?  newMap.delete(id)
    : newMap.set(id, {data, amount})
    setAppData(old => ({
        ...old,
        productsInCart: newMap,
    }))
  }
  const modifyAmount = (id, amount) => {
    const newMap = appData.productsInCart;
    const { data } = newMap.get(id);
    let newAmount;
    if(amount <= 0 ){
      newAmount = 1;
    } else if(amount > data.stock ) {
      newAmount = data.stock;
    } else {
      newAmount = amount;
    }
    newMap.set(id, {
      data,
      amount: newAmount,
    })
    setAppData(old => ({
      ...old,
      productsInCart: newMap,
    }))
  }
   const removeItem = (key) => {
    const newMap = appData.productsInCart;
    newMap.delete(key);
    setAppData(old => ({
      ...old,
      productsInCart: newMap,
    }))
  }

  const getTotalPriceProducts = () => {
    let total = 0;
    appData.productsInCart.forEach(({amount, data}) => {
      total += Number(amount * data.price);
    })
    return total;
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
        removeItem,
        setAppData,
        modifyAmount,
        addProductToCart,
        totalPriceProducts: getTotalPriceProducts(),
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
