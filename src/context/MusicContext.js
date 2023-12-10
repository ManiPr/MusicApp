import React, { createContext, useContext, useState, useRef } from 'react';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [currentMusic, setCurrentMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [currentMusicList, setCurrentMusicList] = useState([]); 


  return (
    <MusicContext.Provider value={{ currentMusic, setCurrentMusic, isPlaying, setIsPlaying, audioRef,recentlyPlayed,setRecentlyPlayed,currentMusicList,setCurrentMusicList }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(MusicContext);
};