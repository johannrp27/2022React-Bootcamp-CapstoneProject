import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styles from '../styles/ProductDetail.module.scss'
import { Carousel } from 'react-responsive-carousel'


const Detail = ({data}) => {
  const [amount, setAmount] = useState(1)
  return (
    <>
      <div className={styles.grid}>
        <div className='mx-2 mx-lg-4'>
          <Carousel
            className='mt-2'
            autoPlay={false}
            infiniteLoop={true}
            dynamicHeight={true}
            showThumbs={false}
            renderArrowPrev={() =>{}}
            renderArrowNext={() =>{}}
            showStatus={false}
            swipeable={true}
            emulateTouch={true}
            >
            {
              data.images.map(({image}, i) => (
                <div key={i}>
                  <img
                    className={styles.imageCarousel}
                    src={image.url} />
                </div>
              ))
            }
          </Carousel>
        </div>
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
          <p className='mb-5'>{data.description[0].text}</p>
          <div className="tags">
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
          <div className="d-inline-flex flex-column gap-2">
            <div className={styles.selector}>
              <button
                className={`btn ${styles.minus}`}
                onClick={() => setAmount(prev => prev-1)}>-</button>
              <input
                className={styles.inputAmount}
                type="number"
                value={amount}
                onChange={({target}) => setAmount(+target.value)}
                name="amount"
                id="amountProd" />
              <button
                className={`btn ${styles.plus}`}
                onClick={() => setAmount(prev => prev+1)}>+</button>
            </div>
            <button
              className={`btn w-100 ${styles.add}`}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <h5>Specs</h5>
        <ul className={styles.listgGroup}>
          {
            data.specs.map(({spec_name, spec_value}) => (
              <li
                key={spec_name}
                className={`${styles.listItem} d-flex justify-content-between align-items-start`}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{spec_name}</div>
                  {spec_value}
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

Detail.propTypes = {
  data: PropTypes.object,
}

export default Detail