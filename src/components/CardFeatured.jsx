import React from 'react'
import PropTypes from 'prop-types';
import styles from '../styles/CardFeatured.module.scss';

const CardFeatured = ({name, sku, urlImage, alt, shortDescription, stock, price}) => {
  const descriptionTrimmed = shortDescription?.slice(0, 80) + '...';
  const productName = name.split(' ').splice(0, 3).join(' ');

  const handleProductClick = () => {
    console.log(sku);
  }
  return (
    <div className={styles.card}>
      <ul className={styles.ul}>
        <li>
          <p className='m-0 fw-bold'>Stock {stock}</p>
        </li>
        <li>
          <p className='m-0 fw-bold'>${price}</p>
        </li>
      </ul>
      <img
        className={styles.imgCard}
        src={urlImage}
        loading="lazy"
        alt={alt} />
      <div className={styles.conText}>
        <h4 className='mb-3'>{productName}</h4>
        <p className={styles.shortDesc}>
          {descriptionTrimmed}
          <button onClick={handleProductClick}>Add to cart</button>
        </p>
      </div>
    </div>
  )
}

CardFeatured.propTypes = {
  name: PropTypes.string,
  urlImage: PropTypes.string,
  sku: PropTypes.string,
  alt: PropTypes.string,
  shortDescription: PropTypes.string,
  stock: PropTypes.number,
  price: PropTypes.number,
}
export default CardFeatured