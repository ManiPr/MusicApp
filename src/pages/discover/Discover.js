import img from '../../assets/banner.png'
import './Discover.css'
import Music from '../../component/music/Music'
import Weekly from '../../component/weekly/Weekly'
import NewReleases from '../../component/new-releases/NewReleases'
import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MusicData } from '../../data'
import MusicPlayer from '../../component/music-player/MusicPlayer'
import { useMusicContext } from '../../context/MusicContext'; 
import Header from '../../component/header/Header'
import SideBar from '../../component/sidebar/SideBar'

export default function Discover() {
    const [musicList, setMusicList] = useState(MusicData);
    const { recentlyPlayed,setRecentlyPlayed } = useMusicContext();
    console.log(recentlyPlayed.length);
  return (
    <>
    <Header></Header>
    <SideBar></SideBar>
    
          <div className='discover'>
            <div className='discover__header'>
                <div className='container'>
                    <div className='discover__wrapper center'>
                        <div className='discover__image-container'>
                            <img src={img} alt='' className='discover__image' />
                        </div>
                        <div className='discover__content'>
                            <div className='discover__titles'>
                                <h3 className='discover__title'>This Month’s</h3>
                                <h3 className='discover__title discover__title--light'>Record Breaking Albums !</h3>
                            </div>
                            <p className='discover__caption'>Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley, One More Of A Stranger, Endless<br />
                            Things, The Heartbeat Stops, Walking Promises, Desired Games and many more...
                            </p>
                            <div className='discover__buttons center'>
                                <div className='discover__button'>Listen Now</div>
                                <div className='discover__button'>Add To Queue</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='discover__recently'>
                <div className='container'>
                <div className='recently__wrapper '>
                <div className='recently__top sectoin-top'>
                     <h3 className='recently__title section-title1'>Recently Played</h3>
                     <h6 className='recently__title section-titile2'>View More</h6>
                </div>
                <div className='recently__musics section-data center'>
                {Array.isArray(recentlyPlayed) && recentlyPlayed.length === 0 ? <p>No songs have been played</p> : 
  recentlyPlayed.length < 6 ? (
    recentlyPlayed.map(music => (
      <Music musics={music} />
    ))
  ) : (
    <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={5}>
      {recentlyPlayed.map(music => (
        <SwiperSlide key={music.Id}>
          <Music musics={music} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}</div>
                </div>
                </div>
            </section>
            <section className='weekly'>
            <div className='container'>
                <div className='weekly__wrapper'>
                <div className='weekly__top sectoin-top'>
                     <h3 className='recently__title section-title1'>Weekly Top 15</h3>
                </div>
                <div className='weekly__content '>
                    {musicList.map((music) => (
                    <Weekly musics={music} />
                    ))}
          
                </div>
                </div>
                </div>
            </section>
            <section className='discover__artist'>
                <div className='container'>
                <div className='artists__wrapper '>
                <div className='artists__top sectoin-top'>
                     <h3 className='artists__title section-title1'>Featured Artists</h3>
                </div>
                <div className='artists__musics section-data center'>
                <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={5}>
              {musicList.map((music) => (
            <SwiperSlide key={music.Id}>
            <Music musics={music} />
            </SwiperSlide>
            ))}
            </Swiper> 
                </div>
                </div>
                </div>
            </section>
            <section className='new-releases'>
                <div className='container'>
                <div className='new-releases__wrapper '>
                <div className='new-releases__top sectoin-top'>
                     <h3 className='new-releases__title section-title1'>Recently Played</h3>
                     <h6 className='new-releases__title section-titile2'>View More</h6>
                </div>
                <div className='new-releases__musics center'>
                <div className='new-releases__divider'></div>
                        <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={5}>
              {musicList.map((music) => (
            <SwiperSlide key={music.Id}>
            <NewReleases musics={music} />
            </SwiperSlide>
            ))}
            </Swiper> 
                </div>
                </div>
                </div>
            </section>
            <section className='discover__recently'>
                <div className='container'>
                <div className='recently__wrapper '>
                <div className='recently__top sectoin-top'>
                     <h3 className='recently__title section-title1'> Featured Albums</h3>
                     <h6 className='recently__title section-titile2'>View More</h6>
                </div>
                <div className='recently__musics section-data  center'>
                <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={5}>
              {musicList.map((music) => (
            <SwiperSlide key={music.Id}>
            <Music musics={music} />
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
