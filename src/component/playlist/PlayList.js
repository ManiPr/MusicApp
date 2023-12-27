import React from 'react'
import Option from '../option/Option'
import play from '../../assets/svg/icon-play.svg'

export default function PlayList() {
  return (
    <>
        <div className='music'>
                       <div className='music__wrapper'>
                       <div className='music__container-image'>
                            <img className='music__image'  src={require(`../../assets/musics/`)} alt='Music' />
                            <div class="music__content">
                                <div class="music__box"></div>
                              
                                <Option></Option>

                                <div class="music__play-icon">
                                    <img  src={play} alt=""/>
                                </div>
                        </div>  
                        </div>
                        <div className='music__information'>
                            <h4 className='music__name'>fsdafa</h4>
                        </div>
                        </div>    
                                                                         
             </div>
    </>
  )
}
