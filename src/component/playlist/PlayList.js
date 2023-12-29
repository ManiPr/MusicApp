import React,{useState} from 'react'
import Option from '../option/Option'
import play from '../../assets/svg/icon-play.svg'
import image from '../../assets/album1.jpg'
import { FaPlus } from "react-icons/fa";
import './playlist.css'
export default function PlayList({playlists}) {
  console.log(playlists.Songs)
  return (
    <>
        <div className='music'>
                       <div className='music__wrapper'>
                       <div className='music__container-image'>
                            <img className='music__image'  src={image} alt='Music' />
                            <div class="music__content">
                                <div class="music__box"></div>
                              
                                <Option></Option>
                                 {playlists.Songs.length>1?<div class="music__play-icon"><img  src={play} alt=""/></div>:<FaPlus class="music__play-icon-fa" />
                                 }   
                              
                        </div>  
                        </div>
                        <div className='music__information'>
                            <h4 className='music__name'>{playlists.Name}</h4>
                            <p className='playlist__category'>{playlists.Category}</p>
                        </div>
                        </div>    
                                                                         
             </div>
    </>
  )
}
