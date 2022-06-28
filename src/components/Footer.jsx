import React from 'react';
import styles from '../styles/Footer.module.scss';
import wizelineLogo from '../assets/images/WizelineLogo.png'
const Footer = () => {
  return(
    <footer className={`d-flex flex-column items-center p-3 text-center mt-4 ${styles.footer}`}>
      <h5>Ecommerce created during Wizeline’s Academy React Bootcamp
      </h5>
      <h6>Made by Johann Rojas</h6>
      <div className='d-flex'>
        <img
          className={styles.wizeLogo}
          src={wizelineLogo}
          alt="Wizeline Academy"/>
      </div>
    </footer>
  );
};

export default Footer;
