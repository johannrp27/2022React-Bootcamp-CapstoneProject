import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/Header.module.scss';
import logo from '../assets/images/LogoSingle.svg'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();
  const [inputUser, setInputUser] = useState('')

  const goHome = () => {
    navigate("/", { replace: true });
  }
  const searchData = () => {
    navigate(`/search?q=${inputUser}`, { replace: true });
  }

  return (
    <nav className={`d-flex items-center p-4 gap-4 mb-4 ${styles.nav}`}>
      <div className={styles.logo}>
        <div
          onClick={goHome}
          className={`d-inline-flex items-center fw-bold gap-3 cursor-pointer`}>
          <img
            className={styles.logo_img}
            src={logo}
            alt="Houseparts" />
          <span className={styles.logoText}>Houseparts</span>
        </div>
      </div>
      <div className='d-flex'>
        <button
          className={`${styles.button} py-2 px-3 d-flex rounded-sm cursor-pointer`}
          onClick={searchData}>
          <FontAwesomeIcon icon="magnifying-glass" />
        </button>
        <input
          placeholder='Type'
          value={inputUser}
          onChange={({target}) => setInputUser(target.value)}
          className={styles.search}/>

      </div>
      <button className={`${styles.button} py-2 px-3 d-flex rounded-sm`}>
        <FontAwesomeIcon icon="cart-shopping" />
      </button>
    </nav>
  );
};

export default Header;
