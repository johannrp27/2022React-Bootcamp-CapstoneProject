import React from 'react'
import PropTypes from 'prop-types';
import styles from '../styles/Sidebar.module.scss'

const Sidebar = ({filters, isAnyActiveFilter, setFilters, isLoading, categories}) => {

  const handleClickCategory = (slug) => {
    setFilters(oldFilters => {
      return {
        ...oldFilters,
        [slug]: !oldFilters[slug],
      }
    })
  }
  const clearFilters = () => {
    setFilters(oldFilters => {
      const newFilters = oldFilters
      Object.keys(newFilters).forEach(fil => newFilters[fil] = false)
      return {...newFilters}
    })
  }

  return (
    <div className={`d-flex flex-column gap-2 ${styles.sidebar}`}>
      {
        isLoading && (<p> Loading </p>)
      }
      {
        categories && categories.map(({id, slugs, data}) => (
          <div
            className={styles.filter}
            id={slugs[0]}
            key={id}>
            <label
              className={styles.inputLabel}
              htmlFor={id}>
              <input
                onClick={() => handleClickCategory(slugs[0])}
                type="checkbox"
                name={data.name}
                checked={filters[slugs[0]]}
                readOnly
                className={styles.inputBox}
                id={id} />
              {data.name}
            </label>
          </div>
        ))
      }
      {
        isAnyActiveFilter() && (
          <button
            className='btn'
            onClick={clearFilters}>Clear Filters</button>
        )
      }
    </div>
  )
}

Sidebar.propTypes = {
  filters: PropTypes.object,
  setFilters: PropTypes.func,
  isLoading: PropTypes.bool,
  categories: PropTypes.array,
  isAnyActiveFilter: PropTypes.func,
}

export default Sidebar