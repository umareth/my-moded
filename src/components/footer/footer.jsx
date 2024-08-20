import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';
import logo2 from '../../assets/logo2.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <img src={logo2} alt="Logo" />

        </div>
        <div className="footer-text">
          <h3 className="footer-a">Работа выполнена при поддержке фонда содействия инновациям</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
