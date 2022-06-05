import React from 'react'
import PropTypes from 'prop-types';
import styles from '../styles/CardCategory.module.scss';

const CardCategory = ({name, urlImage, alt}) => {
  return (
    <div
      className={`${styles.card} d-flex flex-column items-center
    justify-center rounded-lg relative`}>
      <img
        className={`${styles.imgCard}`}
        src={urlImage}
        alt={alt} />
      <div className={styles.content}>
        {name}
      </div>
    </div>
  )
}

CardCategory.propTypes = {
  name: PropTypes.string,
  urlImage: PropTypes.string,
  alt: PropTypes.string,
}
export default CardCategory