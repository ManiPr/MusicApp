import {React,useState,useEffect} from 'react'

import { useMusicContext } from '../../context/MusicContext';
import Option from '../../component/option/Option';
import {MusicData} from '../../data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Music from '../../component/music/Music'
import  './Download.css'
import MusicPlayer from '../../component/music-player/MusicPlayer';
import Table from '../../component/table/Table'
export default function Download() {
    const [musicList,setMusicList]=useState(MusicData)

    const handleMusicSelection=(musicId)=>{
        let newMusicList=musicList.filter(music=>music.id===musicId)
        console.log(newMusicList);
    }
  return (
    <>
        <div className='download'>
        <section className='ablum-table'>
                <div className='container'>
                <div className='album-table__wrapper'>
                <div className='recently__top sectoin-top'>
                     <h3 className='recently__title section-title1'>Your Favourites</h3>
                </div>
           
                 <table>
                  <thead>
                  <tr class="one">
            <th>#</th>
             <th>Song Title</th>
             <th>Artist</th>
             <th>Duration</th>
             <td>Remove</td>
        </tr>
                  </thead>
        
        {musicList.map((music)=>
        <tbody>
          <Table musics={music}></Table>
        </tbody>
        )}  
      
        
                 </table>
			    </div>
                 
                </div>
            </section>
            <section className='discover__recently'>
                <div className='container'>
                <div className='recently__wrapper '>
                <div className='recently__top sectoin-top'>
                     <h3 className='recently__title section-title1'>Recently Played</h3>
                     <h6 className='recently__title section-titile2'>View More</h6>
                </div>
                <div className='recently__musics section-data  center'>
                <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={5}>
              {musicList.map((music) => (
            <SwiperSlide key={music.Id}>
            <Music musics={music} onSelect={handleMusicSelection} />
            </SwiperSlide>
            ))}
            </Swiper> 
                </div>
                </div>
                </div>
            </section>
        </div>
        { <MusicPlayer/> }

    </>
  )
}
