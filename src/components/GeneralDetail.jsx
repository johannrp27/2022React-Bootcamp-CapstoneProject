import React from 'react'
import PropTypes from 'prop-types';
import SpecsList from './SpecsList';
import { Carousel } from 'react-responsive-carousel'
import styles from '../styles/ProductDetail.module.scss'
import ProductFeatures from './ProductFeatures';


const GeneralDetail = ({data}) => {
  return (
    <>
      <div className={styles.grid}>
        <div className='mx-2 mx-lg-4'>
          <Carousel
            className='mt-2'
            autoPlay={false}
            infiniteLoop={true}
            dynamicHeight={true}
            showThumbs={false}
            renderArrowPrev={() =>{}}
            renderArrowNext={() =>{}}
            showStatus={false}
            swipeable={true}
            emulateTouch={true}
            >
            {
              data.images.map(({image}, i) => (
                <div key={i}>
                  <img
                    className={styles.imageCarousel}
                    src={image.url} />
                </div>
              ))
            }
          </Carousel>
        </div>
        <ProductFeatures data={data} />
      </div>
      <SpecsList specs={data.specs}/>
    </>
  )
}

GeneralDetail.propTypes = {
  data: PropTypes.object,
}

export default GeneralDetail