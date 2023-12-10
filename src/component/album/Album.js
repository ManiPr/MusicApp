import {React,useEffect,useState} from 'react'
import './Album.css'
import image from '../../assets/album1.jpg'
import Option from '../option/Option'
import play from '../../assets/svg/icon-play.svg'
import { Link } from 'react-router-dom';
import { useMusicContext } from '../../context/MusicContext';

export default function Album({musics}) {
  const { setCurrentMusic, setIsPlaying, currentMusic,isPlaying,audioRef  } = useMusicContext();
  const [isThisMusicPlaying, setIsThisMusicPlaying] = useState(false);
  const [albumQueue, setAlbumQueue] = useState([]);


  useEffect(() => {
    const handleAudioEnd = () => {
      // آهنگ فعلی به پایان رسید
      if (albumQueue.length > 0) {
        // اگر هنوز آهنگی در صف باقی مانده باشد
        const nextMusic = albumQueue.shift();
        setCurrentMusic(nextMusic);
        if (audioRef.current) {
          audioRef.current.src = nextMusic.audio;
          audioRef.current.play();
          setIsPlaying(true);
        }
      } else {
        // هیچ آهنگی دیگر در صف نیست
        setCurrentMusic(null);
        setIsPlaying(false);
      }
    };
  
    // افزودن یک event listener برای اتمام پخش آهنگ
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleAudioEnd);
    }
  
    // حذف event listener در هنگام عدم استفاده
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleAudioEnd);
      }
    };
  }, [albumQueue]);
  const handlealbumClick = () => {
    console.log('کلیک');
    // اضافه کردن آهنگ‌های آلبوم به صف
    setAlbumQueue([...albumQueue, ...musics.Songs]);
  console.log(albumQueue);
    // اگر هنوز هیچ آهنگی پخش نشده باشد، آهنگ اول را شروع کنید
    if (!currentMusic) {
      const nextMusic = albumQueue.shift();
      setCurrentMusic(nextMusic);
      if (audioRef.current) {
        audioRef.current.src = nextMusic.audio;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };
  return (
    <>
       <div className='album'>

                       <div className='album__wrapper'>
                       <div className='album__container-image'>
                            <img className='album__image'  src={image} alt='album' />
                            <div class="album__content">
                                <div class="album__box"></div>
                              
                                <Option></Option>

                                <div class="album__play-icon">
                                    <img onClick={handlealbumClick} src={play} alt=""/>
                                </div>
                        </div>  
                        </div>
                        <div className='album__information'>
                        <Link to={`/album/${musics.Id}`}>  <h4 className='album__name'>{musics.Name}</h4></Link>
                          
                            <p className='album__artist'>{musics.Artist}</p>
                        </div>
                        </div>    
                                                                         
             </div>
     
    </>
  )
}
