import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../style';
import YaziFormu from '../components/YaziFormu';

const Header = () => {
  return (
    <HeaderStyle>
      <nav className='navbar'>
        <div className='logo'>
          <Link to='/'>
            <img width={100} src='/logo.png' alt='logo' />
          </Link>
        </div>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
