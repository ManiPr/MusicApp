import Option from '../option/Option'
import img from '../../assets/song9.png'
import './Weekly.css'
import play from '../../assets/svg/Icon1.svg'
import React,{useEffect,useState} from 'react'

import { useMusicContext } from '../../context/MusicContext'

export default function Weekly({musics}) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false); 
  const { setCurrentMusic, setIsPlaying, currentMusic,isPlaying,audioRef  } = useMusicContext();
  const [isThisMusicPlaying, setIsThisMusicPlaying] = useState(false);
  
  const handleMoreClick = () => {
    setIsOptionsOpen(!isOptionsOpen); 
  };
   
  useEffect(() => {
    setIsThisMusicPlaying(currentMusic === musics); 
  }, [currentMusic, musics]);



  const handleMusicClick = () => {
    setCurrentMusic(musics);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
      } else {
        audioRef.current.play();
        setIsPlaying(!isPlaying);

      }
    }
  };

  return (
    <>
    <div className='weekly-main center'>
      
      <div className='weekly__left center'>
      <span className='weekly__number'>{musics.Id > 9 ? musics.Id : `0${musics.Id}`}</span>
            <div className='weekly__information center'>
                <div className='weekly__image-container'>
                    <img src={img} className='weekly__image' />
                    <div class="option__play-icon">
                    <img onClick={handleMusicClick} className='option__play-image' src={play} alt=""/>
                    </div>
                </div>
                <div className='weekly__names'>
                        <h4 className='weekly__name'>{musics.Name}</h4>
                        <p className='weekly__caption'>{musics.Artist}</p>
                    </div>
            </div>
        </div>
        <div className='weekly__right center'>
         
          <span className='weekly__time'>5:21</span>
        <Option isOpen={isOptionsOpen}></Option>
        
       
           
        </div>
       <div className='weekly__line'></div>
      
       
    </div>
    </>
  )
}
