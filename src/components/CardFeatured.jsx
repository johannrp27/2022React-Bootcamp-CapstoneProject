import React from 'react'
import PropTypes from 'prop-types';
import styles from '../styles/CardFeatured.module.scss';

const CardFeatured = ({name, urlImage, alt, shortDescription, stock, price}) => {

  return (
    <div className={`${styles.card} d-flex items-center rounded-lg relative`}>
      <img
        className={`m-2 ${styles.imgCard}`}
        src={urlImage}
        loading="lazy"
        alt={alt} />
      <div className={styles.separator} />
      <div className={`h-100 d-flex flex-column justify-evenly ${styles.content}`}>
        <h6 className='fw-bold mt-2'>{name}</h6>
        <p className={`small ${styles.shortDesc}`}>{shortDescription}</p>
        <p className='m-0 text-end fw-medium'>${price}</p>
      </div>
      <p className={`m-0 small absolute ${styles.stock}`}>In stock:
        <span className='fw-bold ms-1'>
          {stock}
        </span>
      </p>
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