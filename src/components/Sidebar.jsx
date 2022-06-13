import React from 'react'
import productCategories from '../assets/mocks/en-us/product-categories.json';
import PropTypes from 'prop-types';
import styles from '../styles/Sidebar.module.scss'

const Sidebar = ({setFilters}) => {

  const handleClickCategory = (slug) => {
    setFilters(oldFilters => {
      return {
        ...oldFilters,
        [slug]: !oldFilters[slug],
      }
    })
  }

  return (
    <div className={`d-flex flex-column gap-2 ${styles.sidebar}`}>
      {
        productCategories.results.map(({id, slugs, data}) => (
          <div
            className={styles.filter}
            id={slugs[0]}
            key={id}>
            <input
              onClick={() => handleClickCategory(slugs[0])}
              type="checkbox"
              name={data.name}
              id={id} />
            <label htmlFor={id}>
              {data.name}
            </label>
          </div>
        ))
      }
    </div>
  )
}

Sidebar.propTypes = {
  setFilters: PropTypes.func,
}

export default Sidebar