import React from 'react'
import image from '../../assets/artist.jpg'
import Option from '../option/Option'
import play from '../../assets/svg/icon-play.svg'
import './ArtistComponent.css'
import { Link } from 'react-router-dom';

export default function ArtistComponent({artists}) {
  console.log(artists);
  return (
    <>
     <div className='music'>
                       <div className='music__wrapper'>
                       <div className='music__container-image'>
                            <img className='music__image'  src={image} alt='Music' />
                            <div class="music__content">
                                <div class="music__box"></div>
                              
                                <Option></Option>

                                <div class="music__play-icon">
                                    <img  src={play} alt=""/>
                                </div>
                        </div>  
                        </div>
                        <div className='music__information'>
                        <Link to={`/artist/${artists.Id}`}>  <h4 className='album__name'>{artists.Name}</h4></Link>

                            <h4 className='music__name'>{artists.Name}</h4>
                        </div>
                        </div>    
                                                                         
             </div>
    </>
  )
}
