import React from 'react';
import styles from '../styles/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/images/LogoSingle.svg'
const Header = () => {
  return (
    <nav className={`d-flex items-center p-4 gap-4 ${styles.nav}`}>
      <div className={`${styles.logo} d-flex items-center fw-bold gap-3`}>
        <img
          className={styles.logo_img}
          src={logo}
          alt="Houseparts" />
        <span className={styles.logoText}>Houseparts</span>
      </div>
      <button className={`${styles.button} py-2 px-3 d-flex rounded-sm`}>
        <FontAwesomeIcon icon="magnifying-glass" />
      </button>
      <button className={`${styles.button} py-2 px-3 d-flex rounded-sm`}>
        <FontAwesomeIcon icon="cart-shopping" />
      </button>
    </nav>
  );
};

export default Header;
