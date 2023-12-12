import {React,useState,useEffect} from 'react'
import {MdFavoriteBorder } from "react-icons/md";
import {MdFavorite } from "react-icons/md";
import image3 from '../../assets/svg/Play2.svg'
import Remove1 from '../../assets/svg/Remove1.svg'
import { useMusicContext } from '../../context/MusicContext';
import { faL } from '@fortawesome/free-solid-svg-icons';

export default function Table({musics,onSelect }) {
  // duration باید اضاف کنی به دیتا ها
    const { setCurrentMusic, setIsPlaying, currentMusic,isPlaying,audioRef  } = useMusicContext();
    const [isThisMusicPlaying, setIsThisMusicPlaying] = useState(false);
    useEffect(() => {
      setIsThisMusicPlaying(currentMusic === musics); 
    }, [currentMusic, musics]);
  
     const musicClick = () => {
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
    const addToFavorite = () => {
musics.AddToFavorite=!musics.AddToFavorite;
     
  }
  const removeMusic=()=>{
    onSelect(musics.Id)
  }
  return (
    <>
         <tr className='tr-child'>
        <td>
        <img onClick={musicClick}  className='album-table__play' src={image3} />
            <span className='number'>{musics.Id}</span></td>
        <td className='song-title'>{musics.Name}</td>
        <td>{musics.Artist}</td>
        <td>5:23</td>
        <td>
  {musics.AddToFavorite === false ? (
    <MdFavoriteBorder onClick={addToFavorite} className='options__icon' />
  ) : (
    <MdFavorite onClick={addToFavorite} className='options__icon' />
  )}
</td>
        <td className='remove'><img  onClick={removeMusic} className='remove-image' src={Remove1}/></td>
        </tr>
    </>
  )
}
