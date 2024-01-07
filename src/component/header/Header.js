import React from 'react'
import './Header.css'
import img from '../../assets/svg/lang.svg'
import img2 from '../../assets/svg/search.svg'

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
                                <img src={img2} className='header__icon-image'></img>
                            </span>
                        </div>
                        <div className='header__trends'>
                            <a href='#' className='header__trend'>Trending Songs:</a>
                            <a href='#' className='header__trend header__trend--white'>Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley (+8 More)</a>
                        </div>
                        </div>
                       <div className='header__right center'>
                         <div className='header__langs'>
                            <span className='header__lang center'>
                                languages 
                                <img className='header__img' src={img} />
                            </span>
                         </div>
                         <div className='header__buttons center'>
                            <div className='header__button'>Register</div>
                            <div className='header__button'>Login</div>
                         </div>
                       </div>
                       </div>
                    </div>
                </div>
    </>
  )
}
