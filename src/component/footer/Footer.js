import React from 'react'
import image from '../../assets/open_logo.png'
import store from '../../assets/apps/app_store.jpg'
import google from '../../assets/apps/google_play.jpg'
import windows from '../../assets/apps/windows.jpg'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='footer__wrpper'>
                <div className='footer__top'>
                  <div className='footer__container-image'>
                    <img className='footer__image' src={image}/>
                  </div>
                </div>
                <div className='footer__contents'>
                  <div className='footer__content'>
                    <h3 className='footer__title section-title1'> Featured Albums</h3>           
                    <p className='footer__description'>vLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
                  </div>
                  <div className='footer__content'>
                  <h3 className='footer__title section-title1'>Download Our App</h3>
                  <div className='footer__content-detail'>
                  <p className='footer__description'>Go Mobile with our app.Listen to your favourite songs at just one click. Download Now !</p>
                  <div className='footer__apps'>
                    <img src={store} className='footer__app'></img>
                    <img src={google} className='footer__app'></img>
                    <img src={windows} className='footer__app'></img>
                  </div>
                    </div>           
                 
                  </div>
                  <div className='footer__content'>
                  <h3 className='footer__title section-title1'>Subscribe</h3>           
                  <div className='footer__content-detail'>
                  <p className='footer__description'>Subscribe to our newsletter and get latest updates and offers.</p>
                  <div className='footer__inputs'>
                   <input placeholder='Enter your Name' className='footer__input' type='text'></input>
                   <input placeholder='Enter your email' className='footer__input' type='text'></input>
                   <button className='footer__input' type='submit'>Sign Me Up</button>
                  </div>
                    </div>  
                  </div>
                  <div className='footer__content'>
                  <h3 className='footer__title section-title1'>Contact Us</h3>           
                  <div className='footer__content-detail'>
                 <div className='footer__contacts'>
                  <div className='footer__contact'></div>
                 </div>
                  <div className='footer__follows'>
                    <p className='footer__follow-text'>Follow Us:</p>
                  </div>
                    </div>  
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
