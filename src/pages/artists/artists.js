import ArtistComponent from '../../component/artist-component/ArtistComponent'
import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArtistData } from '../../data'
import './artists.css'


export default function Artists() {
    const [artistList, setArtistList] = useState(ArtistData);

  return (
    <>
         <div className='artist'>
    <section className='albums-artist'>
                <div className='container'>
                <div className='artists__wrapper '>
                <div className='artists__top sectoin-top'>
                     <h3 className='artists__title section-title1'>Featured Artists</h3>
                </div>
                <div className='artists__musics section-data center'>
                <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={5}>
              {artistList.map((artist) => (
            <SwiperSlide key={artist.Id}>
            <ArtistComponent artists={artist} />
            </SwiperSlide>
            ))}
            </Swiper> 
                </div>
                </div>
                </div>
    </section>
    <section className='top-artist'>
        <div className='container'>
        <div className='artist-top__wrapper'>
        <div className='artists__top sectoin-top'>
                     <h3 className='artists__title section-title1'>Featured Artists</h3>
        </div>
       <div className='artist-data'>
        {artistList.map((artist)=>(
            <ArtistComponent artists={artist}></ArtistComponent>
        ))}
       </div>
        </div>
        </div>
    </section>
    </div>
    </>
  )
}
