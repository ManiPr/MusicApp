import React,{useState} from 'react'
import './TopTrack.css'
import { MusicData } from '../../data'
import Weekly from '../../component/weekly/Weekly';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Music from '../../component/music/Music'
import NewReleases from '../../component/new-releases/NewReleases'
import MusicPlayer from '../../component/music-player/MusicPlayer'

export default function TopTrack() {
    const [musicData, setMusicData] = useState(MusicData);

  return (
    <>
        <div className='top-track'>
        <section className='weekly'>
            <div className='container'>
                <div className='weekly__wrapper'>
                <div className='weekly__top sectoin-top'>
                     <h3 className='recently__title section-title1'>Weekly Top 15</h3>
                </div>
                <div className='weekly__content '>
                    {musicData.map((music) => (
                    <Weekly musics={music} />
                    ))}
          
                </div>
                </div>
                </div>
            </section>
            <section className='discover__recently'>
                <div className='container'>
                <div className='recently__wrapper '>
                <div className='recently__top sectoin-top'>
                     <h3 className='recently__title section-title1'>Top Tracks Of All Time</h3>
                     <h6 className='recently__title section-titile2'>View More</h6>
                </div>
                <div className='recently__musics section-data  center'>
                <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={5}
                  breakpoints={{
                    1700: {
                      slidesPerView: 5,
                    },
                    1400: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    576: {
                      slidesPerView: 1,
                    },
                    350: {
                      slidesPerView: 1,
                    },
                    240: {
                      slidesPerView: 1,
                    },
                  }}
                >
              {musicData.map((music) => (
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
              {musicData.map((music) => (
            <SwiperSlide key={music.Id}>
            <NewReleases musics={music} />
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
