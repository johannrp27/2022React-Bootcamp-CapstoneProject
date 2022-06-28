import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/Header.module.scss';
import logo from '../assets/images/LogoSingle.svg'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();

  function goHome() {
    navigate("/", { replace: true });
  }

  return (
    <nav className={`d-flex items-center p-4 gap-4 mb-4 ${styles.nav}`}>
      <div
        onClick={goHome}
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

export default Header;
