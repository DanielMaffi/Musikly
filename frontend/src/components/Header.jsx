import logoMusikly from '../assets/logo/Musikly-logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <img src = {logoMusikly} alt='logo' />
      </Link>
      
      <Link to="/"className="header__link">
        <h1>Musikly</h1>
      </Link>
    </div>
  );
};

export default Header
