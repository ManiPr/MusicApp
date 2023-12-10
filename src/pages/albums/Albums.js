import Music from '../../component/music/Music'
import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MusicData } from '../../data'
import Weekly from '../../component/weekly/Weekly';
import NewReleases from '../../component/new-releases/NewReleases';
import Album from '../../component/album/Album';
import { AlbumData } from '../../data';
export default function Albums() {
  // یک مپ کلی بزن روی این نتغیر اصلی
    const [albumList, setAlbumList] = useState(AlbumData);
  return (
    <>
     <section className='albums'>
                <div className='container'>
                <div className='albums__wrapper '>
                <div className='albums__top sectoin-top'>
                     <h3 className='albums__title section-title1'>Featured Albums</h3>
                     <h6 className='albums__title section-titile2'>View More</h6>
                </div>
                <div className='albums__musics section-data  center'>
                <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={5}>
              {albumList.map((music) => (
            <SwiperSlide key={music.Id}>
            <Album musics={music} />
            </SwiperSlide>
            ))}
            </Swiper> 
                </div>
                </div>
                </div>
            </section>
            <section className='trend-albums'>
                <div className='container'>
                <div className='trend-albums__wrapper '>
                <div className='trend-albums__top sectoin-top'>
                     <h3 className='trend-albums__title section-title1'>Trending Albums</h3>
                     <h6 className='trend-albums__title section-titile2'>View More</h6>
                </div>
                <div className='trend-albums__musics section-data  center'>
                <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={5}>
              {albumList.map((music) => (
            <SwiperSlide key={music.Id}>
            <Album musics={music} />
            </SwiperSlide>
            ))}
            </Swiper> 
                </div>
                </div>
                </div>
            </section>
            <section className='weekly'>
            <div className='container'>
                <div className='weekly__wrapper'>
                <div className='weekly__top sectoin-top'>
                     <h3 className='recently__title section-title1'>Weekly Top 15</h3>
                </div>
                <div className='weekly__content'>
                    {albumList.map((music) => (
                    <Weekly musics={music} />
                    ))}
          
                </div>
                </div>
                </div>
            </section>
            <section className='albums-artist'>
                <div className='container'>
                <div className='artists__wrapper '>
                <div className='artists__top sectoin-top'>
                     <h3 className='artists__title section-title1'>Album By Artist</h3>
                </div>
                <div className='artists__musics section-data center'>
                <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={5}>
              {albumList.map((music) => (
            <SwiperSlide key={music.Id}>
            <Album musics={music} />
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
              {albumList.map((music) => (
            <SwiperSlide key={music.Id}>
            <NewReleases musics={music} />
            </SwiperSlide>
            ))}
            </Swiper> 
                </div>
                </div>
                </div>
            </section>
    </>
  )
}
