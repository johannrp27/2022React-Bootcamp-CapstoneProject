import React from 'react'
import PropTypes from 'prop-types';

import styles from '../styles/Card.module.scss';
const Card = ({name, urlImage, alt}) => {
  return (
    <div className={`${styles.card} d-flex flex-column rounded-lg`}>
      <img
        className={`${styles.imgCard}`}
        src={urlImage}
        alt={alt} />
      <div className={styles.content}>
        <p className='fw-bold'>{name}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  urlImage: PropTypes.string,
  alt: PropTypes.string,
}
export default Card