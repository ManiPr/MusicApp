import React, { useRef, useEffect,useState } from 'react';
import { AiOutlineDownload,AiOutlineShareAlt } from "react-icons/ai";
import { MdOutlinePlaylistAdd,MdFavoriteBorder } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { IoPlaySkipBackOutline } from "react-icons/io5";
import img1 from '../../assets/svg/Icon1.svg'
import img3 from '../../assets/svg/sound.svg'
import img from '../../assets/song9.png'
import './MusicPlayer.css'
import { TbRepeat } from "react-icons/tb";
import { BsShuffle } from "react-icons/bs";
import { useMusicContext } from '../../context/MusicContext';

export default function MusicPlayer({musicList}) {
//     const {audioRef,currentMusic,isPlaying,setIsPlaying,setCurrentMusic,currentMusicList} = useMusicContext();
   
//     useEffect(() => {
//         const nextIndex = currentMusicList.findIndex(item => item.Id === currentMusic.Id) + 1;
//       console.log(nextIndex);
//       if (nextIndex < currentMusicList.length) {
//         setCurrentMusic(currentMusicList[nextIndex]);
//       }
//         if (audioRef.current && currentMusic) {
//             playSong()
//         setIsPlaying(true);
//         audioRef.current.onended = () => { 
//             const currentIndex = musicList.findIndex((item) => item.Id === currentMusic.Id);
//             const nextIndex = (currentIndex + 1) % musicList.length;
//             setCurrentMusic(musicList[nextIndex]);
//         }
//     }
   
//   }, [currentMusic, setIsPlaying, audioRef,musicList]);
//   const skipSongs=(direction)=>{
//     const currentIndex=musicList.findIndex((item)=>item.Id===currentMusic.Id)
//     if(direction==='next'){
//      if(currentIndex === musicList.length-1){
//         setCurrentMusic(musicList[0])
//       }else{
//         setCurrentMusic(musicList[currentIndex+1])
//       }
    
//     }
//     if(direction==='back'){
//       if(currentIndex === 0){
//         setCurrentMusic(musicList[musicList.length-1])
//       }else{
//         setCurrentMusic(musicList[currentIndex-1])
//       }
     
//     }
//  }
//   const playSong=()=>{
//     console.log('this isnt musicComponent');
//     if(isPlaying){
//     audioRef.current.pause();
//     setIsPlaying(!isPlaying)
//   }
//    else{
//     audioRef.current.play();
//     setIsPlaying(!isPlaying)
//   }
//   }
  
 
//     if (!currentMusic) {
//         return null; 
//       }
  const progress=useRef(null)
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [isBulletDragging, setIsBulletDragging] = useState(false);
  const { currentMusic,setCurrentMusic, isPlaying, setIsPlaying,audioRef,setRecentlyPlayed,recentlyPlayed,currentMusicList } = useMusicContext();
  const [isRepeating, setIsRepeating] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const [randomIndex, setRandomIndex] = useState(null);
  const [isRandom, setIsRandom] = useState(false);
  console.log(currentMusicList);
  const soundRef = useRef(null);
    useEffect(() => {
      const nextIndex = currentMusicList.findIndex(item => item.Id === currentMusic.Id) + 1;
      console.log(nextIndex);
      if (nextIndex < currentMusicList.length) {
        console.log('هوررررررررربیل');
        setCurrentMusic(currentMusicList[nextIndex]);
      }
    if (audioRef.current && currentMusic) {
      if (!recentlyPlayed.some((playedMusic) => playedMusic.Id === currentMusic.Id)) {
        updateRecentlyPlayed(currentMusic);
      }
      audioRef.current.play().catch(error => {
        console.log('This is a Error');
      });
      setIsPlaying(true);
      
    audioRef.current.onended = () => {
      if (isRepeating) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } else if (randomIndex !== null) {
        const nextRandomIndex = (randomIndex + 1) % musicList.length; 
        setCurrentMusic(musicList[nextRandomIndex]);          
        setRandomIndex(nextRandomIndex); 
      } 
    else {
      const currentIndex = musicList.findIndex((item) => item.Id === currentMusic.Id);
      const nextIndex = (currentIndex + 1) % musicList.length;
      setCurrentMusic(musicList[nextIndex]);
    }
  }}
}, [currentMusic, setIsPlaying, audioRef, isRepeating, randomIndex, musicList, recentlyPlayed,]);

    const [songInfo,setSongInfo]=useState({
        currentTime:0, 
        duration:0,
      })
      const updateRecentlyPlayed = (music) => {
        const updatedRecentlyPlayed = [music, ...recentlyPlayed];
        if (updatedRecentlyPlayed.length > 10) {
          updatedRecentlyPlayed.pop();
        }
        setRecentlyPlayed(updatedRecentlyPlayed);
      };
      
    const playSong = (music) => {
      if(isPlaying){
      audioRef.current.pause();
      setIsPlaying(!isPlaying)
    }
     else{
      console.log('false')
      audioRef.current.play();
      setIsPlaying(!isPlaying)
    }
      };
    const timeFormat= (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const formattedSeconds = ("0" + seconds).slice(-2);
        return `${minutes}:${formattedSeconds}`;
      }
    const dragHandler=(event)=>{
        audioRef.current.currentTime=event.target.value
        setSongInfo({...songInfo,currentTime:event.target.value})
      }
    const skipSongs=(direction)=>{
        const currentIndex=musicList.findIndex((item)=>item.Id===currentMusic.Id)
        console.log(currentIndex)
        if(direction==='next'){
          if(currentIndex === musicList.length-1){
            setCurrentMusic(musicList[0])
          }else{
            setCurrentMusic(musicList[currentIndex+1])
          }
         
        }
        if(direction==='back'){
          if(currentIndex === 0){
            setCurrentMusic(musicList[musicList.length-1])
          }else{
            setCurrentMusic(musicList[currentIndex-1])
          }
          
        }
      }
    const toggleRepeat=()=>{
        console.log('thisis repaet')
        setIsRepeating(!isRepeating);
      }
    const randomPlay=()=>{
        const randomIndex = Math.floor(Math.random() * musicList.length);
        setRandomIndex(randomIndex);  
        setIsRandom(!isRandom)    
      }
    const addtofavorite=()=>{
      console.log('mamad');
      setIsFollow(!isFollow)
      if(isFollow){
        currentMusic.AddToFavorite='true'
      }
      else{
        currentMusic.AddToFavorite='false'
      }
      }
    const setProgressBar=(e)=>{
      const width = e.currentTarget.clientWidth;
      const clickX = e.nativeEvent.offsetX;
      const duration = audioRef.current.duration;
      const newCurrentTime = (clickX / width) * duration;

      console.log(width,clickX,duration);
      audioRef.current.currentTime = newCurrentTime;
      console.log(audioRef.current.currentTime);

    }
    const timeupdate=()=>{
      if (isPlaying) {
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;
        const progressPercent = (currentTime / duration) * 100;
        progress.current.style.width = progressPercent + "%";
        setProgressPercentage(progressPercent);

    }
  }

      if (!currentMusic) {
        return null; 
      }
  return (
    <>
        <div className='music-player'>
            <div className='music-player__wrapper center'>
                <div className='music-palyer__information center'>
                    <div className='music-player__static center'>
                        <div className='music-player__image-container'>
                            <img className='music-player__image' src={img} />
                        </div>
                        <div className='music-player__content'>
                            <h4 className='music-player__name'>Paeez Amad</h4>
                            <p className='music-player__artist'>Fraidon</p>
                        </div>
                    </div>
                    <div className='music-player__dynamic center'>
                        <ul className='music-player__buttons center'>
                            <li className='music-player__button center'><AiOutlineDownload className='music-player__icon'></AiOutlineDownload>Download Now</li>
                            <li onClick={addtofavorite} className='music-player__button center'><MdFavoriteBorder className='music-player__icon'></MdFavoriteBorder>Add To Favorite</li>
                            <li className='music-player__button center'><MdOutlinePlaylistAdd className='music-player__icon'></MdOutlinePlaylistAdd>Add To Playlist</li>
                            <li className='music-player__button center'><AiOutlineShareAlt className='music-player__icon'></AiOutlineShareAlt>Share</li>
                        </ul>
                    </div>
                    <span className='music-player__angle-icon'>
                        <FiChevronRight></FiChevronRight>
                    </span>
                </div>
                <div className='music-palyer__player center'>
                    <div className='music-player__play-setting center'>
                            <span onClick={()=>skipSongs('back')}  className='music-player__previous'><IoPlaySkipBackOutline  className='music-player__setting-icon'></IoPlaySkipBackOutline></span>
                            <img onClick={()=>playSong(currentMusic)} src={img1} className='music-player__play' />
                            <span onClick={()=>skipSongs('next')}   className='music-player__next'><IoPlaySkipForwardOutline  className='music-player__setting-icon'></IoPlaySkipForwardOutline></span>
                    </div>
                    <div onClick={(e)=>setProgressBar(e)}  className='music-player__container-progress'>
                        <div  ref={progress} className='music-player__progress'></div>
                        <div style={{ left: `${progressPercentage}%` }} className='music-player__bullet'></div>
                       
                        <audio onTimeUpdate={timeupdate} src={require(`../../assets/songs/${currentMusic.Song}.mp3`)} className='music-player__audio' ref={audioRef}></audio>
                    </div>
                    <div className='music-player__duration center '>
                            <span className='music-palyer__current'>1:33</span>
                            <span className='music-palyer__time-duration'>5:22</span>
                        </div>
                    <div  className='music-player__setting center'>
                    <div className='music-player__sound'>
                    <div className='music-palyer__bullet-sound'></div>
                    <div className="circular-progress">
                    <div className="value-container"><img src={img3} /></div>
                    </div>
                    </div>
                    <div className='music-player__setting-buttons center'>
                        <div onClick={()=>randomPlay  ()} className='music-player__setting-button'><BsShuffle className='music-player__setting-button-icon'></BsShuffle></div>
                        <div onClick={()=>toggleRepeat()} className='music-player__setting-button'><TbRepeat className='music-player__setting-button-icon'></TbRepeat></div>
                    </div>
                </div>
                </div>

                <div className='music-palayer__queue'>
                    <div className='music-player__queue-static'><span className='music-player__angle-icon-queue'></span>Queue</div>
                    <div className='music-player__queue-active'>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
