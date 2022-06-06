import React from 'react'
import PropTypes from 'prop-types';
import styles from '../styles/CardFeatured.module.scss';

const CardFeatured = ({name, urlImage, alt, shortDescription, stock, price}) => {

  return (
    <div className={`${styles.card} d-flex items-center rounded-lg`}>
      <img
        className={`m-2 ${styles.imgCard}`}
        src={urlImage}
        loading="lazy"
        alt={alt} />
      <div className={styles.separator} />
      <div className={styles.content}>
        <div className="d-flex w-100 justify-between items-baseline">
          <h6 className='fw-bold'>{name}</h6>
          <p className='m-0 small'>In stock:
            <span className='fw-medium ms-1'>
              {stock}
            </span>
          </p>
        </div>
        <p className={`small ${styles.shortDesc}`}>{shortDescription}</p>
        <p className='m-0 text-end fw-medium'>${price}</p>
      </div>
    </div>
  )
}

CardFeatured.propTypes = {
  name: PropTypes.string,
  urlImage: PropTypes.string,
  alt: PropTypes.string,
  shortDescription: PropTypes.string,
  stock: PropTypes.number,
  price: PropTypes.number,
}
export default CardFeatured