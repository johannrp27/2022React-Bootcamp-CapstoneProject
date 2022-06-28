import React from 'react'
import PropTypes from 'prop-types';
import CardCategory from '../components/CardCategory';

import styles from '../styles/GridCategories.module.scss';
import { useGridCategories } from '../utils/hooks/useGridCategories';

const GridCategories = () => {
  const { categories, isLoading } = useGridCategories()

  return (
    <>
      {
        isLoading && (
          <div>Loading</div>
        )
      }
      {
        categories.length <= 0 && (
          <div>No data to show</div>
        )
      }
      {
        !isLoading &&
        (<>
          <h4 className='mb-4'>Our Available Categories</h4>
          <div className={`d-grid gap-2 ${styles.grid}`}>
            {
              categories.map(({id, data: {name, main_image}, slugs}) => (
                <CardCategory
                  slug={slugs[0]}
                  name={name}
                  alt={main_image.alt}
                  urlImage={main_image.url}
                  key={id} />
              ))
            }
          </div>
        </>)
      }
    </>
  )
}

GridCategories.propTypes = {
  data: PropTypes.object,
}

export default GridCategories
