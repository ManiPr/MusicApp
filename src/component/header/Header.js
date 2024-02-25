import React, { useState } from 'react';
import './Header.css';
import img2 from '../../assets/svg/search.svg';

export default function Header() {


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
              

            </div>
            <h1 className='discover__title'>Record Breaking Albums !</h1>
            <div className='header__right center'>
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