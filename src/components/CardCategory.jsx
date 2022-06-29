import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from '../styles/CardCategory.module.scss'

const CardCategory = ({name, urlImage, alt, slug}) => {
  return (
    <Link to={`/productlist?slug=${slug}`} >
      <div
        className={`${styles.card} d-flex flex-column items-center
        justify-center rounded-lg relative m-3`}>
        <img
          className={`${styles.imgCard}`}
          src={urlImage}
          loading="lazy"
          alt={alt} />
        <div className={styles.content}>
          {name}
        </div>
      </div>
    </Link>
  )
}

CardCategory.propTypes = {
  name: PropTypes.string,
  urlImage: PropTypes.string,
  alt: PropTypes.string,
  slug: PropTypes.string,
}
export default CardCategory