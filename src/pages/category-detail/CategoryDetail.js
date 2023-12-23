import React,{useState,useEffect} from 'react'
import { MusicData } from '../../data'
import Music from '../../component/music/Music'
import {useParams} from 'react-router-dom'

export default function CategoryDetail() {
  const [musicList, setMusicList] = useState([]);
  const params = useParams();

  useEffect(() => {
    const filteredMusic = MusicData.filter(music => music.Category === params.categoryname);
    setMusicList(filteredMusic);
  }, [params.categoryname]);

  return (
    <>
     <section className='top-artist'>
        <div className='container'>
        <div className='artist-top__wrapper'>
        <div className='artists__top sectoin-top'>
                     <h3 className='artists__title section-title1'>{params.categoryname}</h3>
        </div>
       <div className='artist-data'>
        {musicList.map((music)=>(
            <Music musics={music}></Music>
        ))}
       </div>
        </div>
        </div>
    </section>
    </>
  )
}
