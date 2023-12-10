import {React,useState,useEffect} from 'react'
import './ArtistMusic.css'
import image3 from '../../assets/svg/Play2.svg'
import {MdFavoriteBorder } from "react-icons/md";
import { useMusicContext } from '../../context/MusicContext';
import MusicPlayer from '../music-player/MusicPlayer';
import Option from '../option/Option';
export default function ArtistMusic({artists}) {
    const { setCurrentMusic, setIsPlaying, currentMusic,isPlaying,audioRef  } = useMusicContext();
    const [isThisMusicPlaying, setIsThisMusicPlaying] = useState(false);
    
    useEffect(() => {
      setIsThisMusicPlaying(currentMusic === artists); 
    }, [currentMusic, artists]);
  
     const albumClick = () => {
      setCurrentMusic(artists);
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
    const addToFavorite=()=>{
      console.log('adasda')
    }
  return (
    <>
    <ul className='album-table__datas'>
						<li className='album-table__data'>
							<img onClick={albumClick} className='album-table__play' src={image3} />
							<span className='album-table__number'>01</span>
							</li>
						<li className='album-table__data'>{artists.Name}</li>

						<li className='album-table__data'>{artists.Artist}</li>

						<li className='album-table__data'>5:26</li>

						<li onClick={addToFavorite} className='album-table__data'><MdFavoriteBorder className='options__icon'></MdFavoriteBorder></li>

            <Option></Option>
						
	</ul>
    { <MusicPlayer/> }
    </>
  )
}
