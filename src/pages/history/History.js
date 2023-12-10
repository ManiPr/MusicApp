import React, { useState } from 'react'
import { MusicData } from '../../data'
import Music from '../../component/music/Music'
import './History.css'
import { useMusicContext } from '../../context/MusicContext'; 

export default function History() {
    const [musicList,setMusicList]=useState(MusicData)
    const { recentlyPlayed,setRecentlyPlayed } = useMusicContext();

  return (
    <>
        <div className='history'>
        <div className='artist-top__wrapper'>
        <div className='artists__top sectoin-top'>
                     <h3 className='artists__title section-title1'>History</h3>
                     <h3 className='artists__clear '>Clear All</h3>
        </div>
       <div className='artist-data'>
        {recentlyPlayed&&recentlyPlayed.map((music)=>(
            <Music musics={music}></Music>
        ))}
       </div>
        </div>
               
        </div>
    </>
  )
}
