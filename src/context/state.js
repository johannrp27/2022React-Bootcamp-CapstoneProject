import React, { useState } from 'react'
import appContext from './context'
import PropTypes from 'prop-types';

const AppState = ({ children }) => {
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    zip: '',
    notes: '',
  });

  const initialState = {
    countInCart: 0,
    productsInCart : new Map(),
  }
  const [appData, setAppData] = useState(initialState)

  const addProductToCart = (id, data, amount = 1) => {
    const newMap = appData.productsInCart;
    newMap.has(id)
    ?  newMap.set(id, { data, amount: +newMap.get(id).amount + 1 })
    : newMap.set(id, { data, amount })
    setAppData(old => ({
        ...old,
        productsInCart: newMap,
    }))
    getNewCountProducts()
  }

  const getNewCountProducts = () => {
    const newMap = appData.productsInCart;
    const iteratorMap = newMap.values();
    let total = 0;
    for(const {amount} of iteratorMap) {
      total += +amount;
    }
    setAppData(old => ({
      ...old,
      countInCart: total,
    }))
  }

  const modifyAmount = (id, amount) => {
    const newMap = appData.productsInCart;
    const { data } = newMap.get(id);
    let newAmount;
    if(amount > data.stock ) {
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
    getNewCountProducts()
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

  return (
    <appContext.Provider
      value={{
        ...appData,
        appData,
        removeItem,
        setAppData,
        customerData,
        setCustomerData,
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
