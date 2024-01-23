import React from 'react'
import './AlbumBanner.css'
import image from '../../assets/album.jpg'
export default function AlbumBanner() {
  return (
    <div className='album-banner'>
        <div className='ablum-banner__image-container'>
            <img src={image} className='album-banner__image' />
        </div>
        <div className='album-banner__content'>
            <div className='album-banner__information'>
                <h3 className='album-banner__title'>Wakking</h3>
                <p className='album-banner__title'>lfjdalkf</p>
            </div>
            <div className='album-banner__buttons'>
                <div className='album-banner__button'>Play All</div>
            </div>
        </div>
    </div>
  )
}
