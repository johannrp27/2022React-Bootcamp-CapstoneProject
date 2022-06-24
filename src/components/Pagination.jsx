import React from 'react'
import styles from '../styles/Pagination.module.scss'

const Pagination = () => {

  return (
    <div className={`d-flex my-4 ${styles.pagination}`}>
      <button className="">1</button>
      <button className="">2</button>
      <button className="">3</button>
      <button className="">4</button>
    </div>
  )
}

export default Pagination