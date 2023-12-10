import React,{useEffect,useState} from 'react'
import img2 from  '../../assets/musics/Music1.jpg'
import './Music.css'
import play from '../../assets/svg/icon-play.svg'
import Option from '../option/Option'
import { useMusicContext } from '../../context/MusicContext'
export default function Music({musics}) {
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
          <div className='music'>
                       <div className='music__wrapper'>
                       <div className='music__container-image'>
                            <img className='music__image'  src={require(`../../assets/musics/${musics.Image}`)} alt='Music' />
                            <div class="music__content">
                                <div class="music__box"></div>
                              
                                <Option></Option>

                                <div class="music__play-icon">
                                    <img onClick={handleMusicClick} src={play} alt=""/>
                                </div>
                        </div>  
                        </div>
                        <div className='music__information'>
                            <h4 className='music__name'>{musics.Name}</h4>
                            <p className='music__artist'>{musics.Artist}</p>
                        </div>
                        </div>    
                                                                         
             </div>
    </>
  )
}
