import React from 'react'
import styles from '../styles/Pagination.module.scss'
import PropTypes from 'prop-types';

const Pagination = ({totalPages, currentPage, setCurrentPage}) => {
  return (
    <div className={`d-flex my-4 ${styles.pagination}`}>
      {
        [...Array(totalPages)].map((val, i) => (
          <button
            key={i+1}
            onClick={() => setCurrentPage(i+1)}
            className={`${i+1 === currentPage ?'active':''} cursor-pointer`}>{i+1}</button>
        ))
      }
    </div>
  )
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
}
export default Pagination