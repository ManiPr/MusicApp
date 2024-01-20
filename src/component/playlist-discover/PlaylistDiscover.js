import React from 'react'
import './PlaylistDiscover.css'
import {MdFavoriteBorder } from "react-icons/md";
import {MdFavorite } from "react-icons/md";
export default function PlaylistDiscover() {
  return (
    <>
            <div className='playlist-discover'>
                <div className='playlist-discover__left'>
                    <span className='playlist-discover__number'>01</span>
                    <div className='playlist-discover__content'>
                        <div className='playlist-discover-container-image'>
                        <img className='playlist-discover__image' src=''></img>
                        </div>

                        <div className='playlist-discover__information'>
                            <h3 className='playlist-discover__name'></h3>
                            <p  className='playlist-discover__caption'></p>
                        </div>
                    </div>
                </div>
                <div className='playlist-discover__right'>

                </div>
            </div>
    </>
  )
}
