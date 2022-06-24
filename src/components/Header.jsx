import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/Header.module.scss';
import logo from '../assets/images/LogoSingle.svg'

const Header = ({setCurrentView}) => {
  const handleViewChange = (page) => {
    setCurrentView(page);
    // TODO Add Scroll to
  }
  return (
    <nav className={`d-flex items-center p-4 gap-4 ${styles.nav}`}>
      <div
        onClick={() => handleViewChange('Home')}
        className={`${styles.logo} d-flex items-center fw-bold gap-3 cursor-pointer`}>
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

Header.propTypes = {
  setCurrentView: PropTypes.func,
}

export default Header;
