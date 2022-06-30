import React from 'react'
import styles from '../styles/ProductDetail.module.scss'
import PropTypes from 'prop-types';

const SpecsList = ({specs}) => {
  return (
    <div className="container my-4">
      <h5>Specs</h5>
      <ul className={styles.listgGroup}>
        {
        specs.map(({spec_name, spec_value}) => (
          <li
            key={spec_name}
            className={`${styles.listItem} d-flex justify-content-between align-items-start`}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">{spec_name}</div>
              {spec_value}
            </div>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

SpecsList.propTypes = {
  specs: PropTypes.object,
}

export default SpecsList