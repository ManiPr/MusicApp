import React,{useEffect,useState} from 'react'

import { useMusicContext } from '../../context/MusicContext'

import './NewReleases.css'
import img from '../../assets/song9.png'
import play from '../../assets/svg/Icon1.svg'

export default function NewReleases({musics}) {
  const { setCurrentMusic, setIsPlaying, currentMusic,isPlaying,audioRef  } = useMusicContext();
  const [isThisMusicPlaying, setIsThisMusicPlaying] = useState(false);
   
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
       
          <div className='new-releases__main center'>
           
          <div className='new-releases__left center'>
            <span className='new-releases__circle'></span>
            <div className='new-releases__information center'>
                <div className='new-releases__image-container'>
                    <img src={img} className='new-releases__image' />
                    <div onClick={handleMusicClick} class="option__play-icon">
                    <img className='option__play-image' src={play} alt=""/>
                    </div>
                </div>
                <div className='new-releases__names'>
                        <h4 className='new-releases__name'>fsadfsdafsdaf</h4>
                        <p className='new-releases__caption'>fdsfas</p>
                    </div>
            </div>
        </div>
        <div className='new-releases__right'>
        <span className='new-releases__time'>5:21</span>
        <div>
        </div>
        </div>
          </div>
          
       
    
    </>
  )
}
