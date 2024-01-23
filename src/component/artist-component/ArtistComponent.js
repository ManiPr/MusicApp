import React from 'react'
import image from '../../assets/artist.jpg'
import play from '../../assets/svg/icon-play.svg'
import './ArtistComponent.css'
import { Link } from 'react-router-dom';

export default function ArtistComponent({artists}) {
  console.log(artists);
  return (
    <>
     <div className='artists'>
                       <div className='artists__wrapper'>
                       <div className='artists__container-image'>
                            <img className='artists__image'  src={image} alt='artists' />
                            <div class="artists__content">
                                <div class="artists__box"></div>
                                <div class="artists__play-icon">
                                    <img  src={play} alt=""/>
                                </div>
                        </div>  
                        </div>
                        <div className='artists__information'>
                        <Link to={`/artist/${artists.Id}`}>  <h4 className='artists__name'>{artists.Name}</h4></Link>
                        </div>
                        </div>    
                                                                         
             </div>
    </>
  )
}
