import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import styles from '../styles/ProductCard.module.scss';
import { Link } from 'react-router-dom';
import appContext from '../context/context';

const ProductCard = ({data, id, name, urlImage, alt, shortDescription, stock, price}) => {
  const descriptionTrimmed = shortDescription?.slice(0, 80) + '...';
  const productName = name.split(' ').splice(0, 3).join(' ');

  const {addProductToCart} = useContext(appContext);
  const handleAddProduct = () => {
    addProductToCart(id, data)
  }
  return (
    <div className={styles.containerCard}>
      <Link to={`/products/${id}`}>
        <div className={styles.card}>
          <ul className={styles.ul}>
            <li>
              <p className='m-0 fw-bold'>Stock {stock}</p>
            </li>
            <li>
              <p className='m-0 fw-bold'>${price}</p>
            </li>
          </ul>
          <img
            className={styles.imgCard}
            src={urlImage}
            loading="lazy"
            alt={alt} />
          <div className={styles.conText}>
            <h4 className='mb-3'>{productName}</h4>
            <p className={styles.shortDesc}>
              {descriptionTrimmed}
            </p>
          </div>
        </div>
      </Link>
      <button
        disabled={stock === 0}
        className={styles.btnAdd}
        onClick={handleAddProduct}>
        {
          stock === 0
          ? 'Out of stock'
          : 'Add to cart'
        }
      </button>
    </div>
  )
}

ProductCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  urlImage: PropTypes.string,
  alt: PropTypes.string,
  shortDescription: PropTypes.string,
  stock: PropTypes.number,
  price: PropTypes.number,
  data: PropTypes.object,
}
export default ProductCard