import React from 'react'
import './Category.css'
import image1 from '../../assets/Genres/img1.jpg'
import image2 from '../../assets/Genres/img2.jpg'
import image3 from '../../assets/Genres/img3.jpg'
import image4 from '../../assets/Genres/img4.jpg'
import image5 from '../../assets/Genres/img5.jpg'
import image6 from '../../assets/Genres/img6.jpg'
import image7 from '../../assets/Genres/img7.jpg'
import image8 from '../../assets/Genres/img8.jpg'
import image9 from '../../assets/Genres/img9.jpg'
import image10 from '../../assets/Genres/img10.jpg'
import image11 from '../../assets/Genres/img11.jpg'
import image12 from '../../assets/Genres/img12.jpg'
import image13 from '../../assets/Genres/img13.jpg'
import { Link } from 'react-router-dom';

// مقدمه ای برای شروع کار بار استمرار استمرار استمرار
// من استمرار دارم در کد زدن حتی روز های که نمیخوام کد بزنمم هم میام و یک خط کد مینویسم
export default function Category() {
  return (
    <>
        <div className='category'>
          <div className='container'>
          <div className='category__top'>
                     <h3 className='category__title'>Genres</h3>
                </div>
            <div class="row">
                     <div class="col-lg-4 category__image ">
                        <div class="ms_genres_box ">
                            <img src={image1} alt="" class="img-fluid"/>
                            <div class="music__boxs image1"></div>
                                                 <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                          
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="ms_genres_box">
                                    <img src={image2} alt="" class="img-fluid"/>
                                            <div class="music__boxs"></div>
                                    <div class="music__boxs"></div>
                                                           <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="ms_genres_box">
                                    <img src={image3} alt="" class="img-fluid"/>
                                            <div class="music__boxs"></div>
                                                                   <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="ms_genres_box">
                                    <img src={image5} alt="" class="img-fluid"/>
                                            <div class="music__boxs"></div>
                                                                   <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                        
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="ms_genres_box">
                                    <img src={image6} alt="" class="img-fluid"/>
                                            <div class="music__boxs"></div>
                                                                   <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2"> 
                        <div class="ms_genres_box ">
                            <img src={image4} alt="" class="img-fluid"/>
                                    <div class="music__boxs image4"></div>
                                                           <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                          
                              
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="ms_genres_box">
                                    <img src={image7} alt="" class="img-fluid"/>
                                            <div class="music__boxs"></div>
                                                                   <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                      
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="ms_genres_box">
                                <img src={image8} alt="" class="img-fluid"/>
                                        <div class="music__boxs"></div>
                                                               <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                    
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="ms_genres_box">
                                <img src={image9} alt="" class="img-fluid"/>
                                        <div class="music__boxs"></div>
                                                               <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                                 
                  
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="ms_genres_box">
                                <img src={image10} alt="" class="img-fluid"/>
                                        <div class="music__boxs"></div>
                                                               <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                    
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="ms_genres_box">
                                <img src={image11} alt="" class="img-fluid"/>
                                        <div class="music__boxs"></div>
                                                               <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="ms_genres_box ">
                        <img src={image12} alt="" class="img-fluid"/>
                                <div class="music__boxs image12"></div>
                                                       <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>


                          
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="ms_genres_box ">
                        <img src={image13} alt="" class="img-fluid"/>
                                <div class="music__boxs image13"></div>
                                                       <Link to="/categorydetail/Rock" className='category__name'>Rock</Link>



                        </div>
                    </div>
    
                </div>
          </div>
        </div>
    </>
  )
}
