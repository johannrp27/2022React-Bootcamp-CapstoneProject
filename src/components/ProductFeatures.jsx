import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types';
import styles from '../styles/ProductDetail.module.scss'
import appContext from '../context/context';

const ProductFeatures = ({data}) => {
  const [amount, setAmount] = useState(1)
  const {addProductToCart} = useContext(appContext);
  const toggleAddProduct = () => {
    addProductToCart(data.id, data, amount)
  }

  const handleAddAmount = (type) => {
    if(type === 'plus') {
      if(amount < data.stock) {
        setAmount(prev => prev+1)
      }
    } else {
      setAmount(prev => prev-1)
    }
  }

  const setManualInput = (amount) => {
    setAmount(amount < data.stock ? amount : data.stock)
  }

  return (
    <div className='mx-2 mx-lg-4 pe-3'>
      <h4>{data.name}</h4>
      <div className="d-flex w-100 justify-between">
        <p className='small'>SKU: {data.sku}</p>
        <p className={`small ${styles.slug}`}>Category: {data.category.slug}</p>
      </div>
      <div className="mb-4">
        <p className={`small mb-0 fw-medium ${styles.oldPrice}`}>
          Before: ${data.price*120/100}</p>
        <h6>Today: ${data.price}</h6>
      </div>
      <p className='mb-3 mb-md-5'>{data.description[0].text}</p>
      <div className="tags mb-4">
        <h6 className='text-end'>Tags</h6>
        <div className="d-flex justify-end gap-3">
          {
            data.tags.map(tag => (
              <div
                key={tag}
                className={`${styles.badge} d-inline-flex px-2 py-1`}>
                {tag}
              </div>
            ))
          }
        </div>
      </div>
      <div className={`flex-column gap-2 ${styles.groupSelector}`}>
        <div className={styles.selector}>
          <button
            className={`btn ${styles.minus}`}
            onClick={() => handleAddAmount('minus')}>-</button>
          <input
            className={styles.inputAmount}
            type="number"
            value={amount}
            onChange={({target}) => setManualInput(+target.value)}
            name="amount"
            id="amountProd" />
          <button
            className={`btn ${styles.plus}`}
            onClick={() => handleAddAmount('plus')}>+</button>
        </div>
        <button
          disabled={data.stock === 0 || amount < 1}
          onClick={toggleAddProduct}
          className={`btn w-100 ${styles.add}`}>Add to cart</button>
      </div>
    </div>
  )
}

ProductFeatures.propTypes = {
  data: PropTypes.object,
}

export default ProductFeatures