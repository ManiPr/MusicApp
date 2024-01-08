import React, { useState } from 'react';
import './Header.css';
import img2 from '../../assets/svg/search.svg';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='header__wrapper center'>
            <div className='header__left center'>
              <div className='header__search-box'>
                <input className='header__input' type='text' placeholder='Search Music Here..' />
                <span className='header__icon'>
                  <img src={img2} className='header__icon-image' alt='Search Icon' />
                </span>
              </div>
              <ul className='header__menus center'>
                <li className={`header__menu ${activeMenu === 'Home' ? 'header__menu--active' : ''}`} onClick={() => handleMenuClick('Home')}>
                  Home
                </li>
                <li className={`header__menu ${activeMenu === 'Library' ? 'header__menu--active' : ''}`} onClick={() => handleMenuClick('Library')}>
                  Library
                </li>
                <li className={`header__menu ${activeMenu === 'Browse' ? 'header__menu--active' : ''}`} onClick={() => handleMenuClick('Browse')}>
                  Browse
                </li>
              </ul>
            </div>
            <div className='header__right center'>
              <ul className='header__sub-menus center'>
                {activeMenu === 'Library'&&
                <>
                 <li className='header__sub-menu'>PlayList</li>
                 <li className='header__sub-menu'>Artist</li>
                 <li className='header__sub-menu'>Album</li>
                 </>
                 }
               {activeMenu === 'Home'&&
                <>
                 <li className='header__sub-menu'>Discover</li>
                 <li className='header__sub-menu'>Downloads</li>
                 <li className='header__sub-menu'>Favorites</li>
                 </>
                 }
                  {activeMenu === 'Browse'&&
                <>
                 <li className='header__sub-menu'>Genres</li>
                 <li className='header__sub-menu'>Tracks</li>
                 <li className='header__sub-menu'>History</li>
                 </>
                 }
             

              </ul>
              <div className='header__buttons center'>
                <div className='header__button'>Register</div>
                <div className='header__button'>Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}