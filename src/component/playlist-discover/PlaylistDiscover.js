import React,{useState} from 'react'
import './PlaylistDiscover.css'
import {MdFavoriteBorder } from "react-icons/md";
import {MdFavorite } from "react-icons/md";
import img from '../../assets/song9.png'
import { MusicData } from '../../data'
import Option from '../../component/option/Option'
import image3 from '../../assets/svg/paly3.svg'

export default function PlaylistDiscover({musics,index}) {
  console.log(index);
  const [musicList, setMusicList] = useState(MusicData);

  return (
    <>
            <div  className='playlist-discover center' >
                <div className='playlist-discover__left center'>
                    <span className='playlist-discover__numbers'>
                      <img className='playlist-discover__play-icon' src={image3} />
                      <span className='playlist-discover__number' >{musics.Id > 9 ? musics.Id : `0${musics.Id}`}</span>
                      </span>
                    <div className='playlist-discover__content center'>
                        <div className='playlist-discover-container-image'>
                        <img className='playlist-discover__image' src={img}></img>
                        </div>

                        <div className='playlist-discover__information center'>
                            <h3 className='playlist-discover__name'>{musics.Name}</h3>
                            <p  className='playlist-discover__caption'>{musics.Artist}</p>
                        </div>
                    </div>
                </div>
                <div className='playlist-discover__right center'>
                       <div className='playlist-discover__icons'><MdFavorite className='playlist-icon'></MdFavorite></div>
                       <p className='playlist-discover__duration'>3:15</p>
                       <Option></Option>
                </div>
            </div>
    </>
  )
}
