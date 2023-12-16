import {React,useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'; // Import necessary modules
import './Table.css'
import {MdFavoriteBorder } from "react-icons/md";
import {MdFavorite } from "react-icons/md";
import image3 from '../../assets/svg/Play2.svg'
import Remove1 from '../../assets/svg/Remove1.svg'
import { useMusicContext } from '../../context/MusicContext';
import Option from '../../component/option/Option'

export default function Table({musics,onSelect }) {
  const location = useLocation();

  const isArtistRoute = location.pathname === '/artist/4';
  const isAlbumRoute = location.pathname === '/album/4';

    const { setCurrentMusic, setIsPlaying, currentMusic,isPlaying,audioRef  } = useMusicContext();
    const [isThisMusicPlaying, setIsThisMusicPlaying] = useState(false);
    const [isFavorite, setIsFavorite] = useState(musics.AddToFavorite); // Use state to keep track of favorite status

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
      setIsFavorite(!isFavorite);
      console.log(musics.AddToFavorite);
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
        {isFavorite ? (
            <MdFavorite onClick={addToFavorite} className='options__icon' />
          ) : (
            <MdFavoriteBorder onClick={addToFavorite} className='options__icon' />
          )}
</td>
{isAlbumRoute && (
  <td className='remove'>
    <img onClick={removeMusic} className='remove-image' src={Remove1} />
  </td>
)}
{isArtistRoute && (
   <td className='more'><Option></Option></td>
   )}
        
        </tr>
    </>
  )
}

