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
import image1 from '../../assets/Genres/img1.jpg'
import image2 from '../../assets/Genres/img2.jpg'
import image3 from '../../assets/Genres/img3.jpg'
import image4 from '../../assets/Genres/img4.jpg'
import image5 from '../../assets/Genres/img5.jpg'
import image6 from '../../assets/Genres/img6.jpg'
import Genres from '../../component/genres/Genres'
import PlaylistDiscover from '../../component/playlist-discover/PlaylistDiscover'
import { Link } from 'react-router-dom';

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
                           <div className='discover__playlist'>
                                <ul className='discover__playlist-titles center'>
                                <li className='discover__playlist-title'>Trending Songs</li>
                                </ul> 
                                <div className='discover__playlist-lists'>
                                    {musicList.map((music,index) =>(
                                        <PlaylistDiscover index={index} musics={music}></PlaylistDiscover>
                                    ))}
                                </div>
                           </div>
                        </div>
                      
                    </div>
                </div>
            </div>









            <section className='discover__genres'>
                <div className='container'>
                <div className='genres__wrapper'>
                <div className='recently__top sectoin-top'>
                     <h3 className='recently__title section-title1'>Top Genres</h3>
                     <h6 className='recently__title section-titile2'>View More</h6>
                </div>
                <div className='recently__musics section-data center'>
               
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
            <section className='discover__category'>
              <div className='container'>
                  <div className='recently__wrapper '>
                <div className='recently__top sectoin-top'>
                     <h3 className='recently__title section-title1'>Top Genres</h3>
                     <h6 className='recently__title section-titile2'>View More</h6>
                </div>
                <div className='category__wrapper'>
                  <div className='row'>
                  <div class="col-lg-4 category__image ">
                        <div class="ms_genres_box img1">
                            <img src={image1} alt="" class="img-fluid"/>
                            <div class="music__boxs image1"></div>
                                                 <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                          
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="ms_genres_box img2">
                                    <img src={image2} alt="" class="img-fluid img-fluid2"/>
                                            <div class="music__boxs"></div>
                                    <div class="music__boxs"></div>
                                                           <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="ms_genres_box img3">
                                    <img src={image3} alt="" class="img-fluid"/>
                                            <div class="music__boxs"></div>
                              <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="ms_genres_box img4">
                                    <img src={image5} alt="" class="img-fluid"/>
                                            <div class="music__boxs"></div>
                                                                   <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                        
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="ms_genres_box img5">
                                    <img src={image6} alt="" class="img-fluid img-fluid2"/>
                                            <div class="music__boxs"></div>
                                                                   <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2"> 
                        <div class="ms_genres_box img6">
                            <img src={image4} alt="" class="img-fluid img-fluid2"/>
                                    <div class="music__boxs image4"></div>
                                                           <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                          
                              
                        </div>
                    </div>
        
                  </div>
                  </div>
                </div>
              </div>
            </section>
        </div>  
         { <MusicPlayer/> } 
        

    </>
  )
}








