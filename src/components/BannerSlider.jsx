import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'
import PropTypes from 'prop-types';
import styles from '../styles/BannerSlider.module.scss'

const BannerSlider = ({data}) => {
  const banners = data.results;
  return (
    <Carousel
      className='mt-2'
      autoPlay={false}
      infiniteLoop={true}
      showThumbs={false}
      renderArrowPrev={() =>{}}
      renderArrowNext={() =>{}}
      showStatus={false}
      swipeable={true}
      emulateTouch={true}
    >
      {
        banners.map(({id, data}) => (
          <div
            className={`d-flex gap-4 items-center
            justify-center relative rounded-lg mx-0 mx-lg-4 ${styles.slide}`}
            key={id}>
            <img
              className={`${styles.imgBanner} rounded-lg`}
              src={data.main_image.url}
              loading="lazy" />
            <div className="text-center absolute px-1">
              <h4 className={styles.title}>
                {data.title}
              </h4>
              <p className={styles.description}>
                {data.description[0].text}
              </p>
            </div>

          </div>
        ))
      }
    </Carousel>
  )
}
BannerSlider.propTypes = {
  data: PropTypes.object,
}
export default BannerSlider