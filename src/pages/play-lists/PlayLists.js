import React, { useState,useRef  } from 'react';
import './PlayLists.css';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import Music from '../../component/music/Music';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MusicData } from '../../data';
import Remove1 from '../../assets/svg/Remove1.svg';
import {PlayListData} from '../../data'
import {CategoryData} from '../../data'

import PlayList from '../../component/playlist/PlayList';

export default function PlayLists() {
  const [musicList, setMusicList] = useState(MusicData);
  const playlist = useRef(null);
  const createPalylist = useRef(null);
  const [playLists, setPlayLists] = useState(PlayListData);
  const [newPlaylistTitle, setNewPlaylistTitle] = useState(''); 
  const [categoryList, setCategoryList] = useState(CategoryData);
  const [selectedCategory, setSelectedCategory] = useState('');


  const showEvent = () => {
    createPalylist.current.style.top = '50%';
    playlist.current.style.pointerEvents = 'none';
    createPalylist.current.classList.add('pointer-events');
  };
  
  const cancel = () => {
    createPalylist.current.style.top = '-50%';
    playlist.current.style.pointerEvents = 'auto';
    createPalylist.current.classList.remove('pointer-events');
  };

  const createPlayList=()=>{
    console.log('createPlayList');
    if (newPlaylistTitle.trim() !== '') {

      const newPlaylist = {
        Id: (playLists.length + 1).toString(), // تغییر این قسمت
        Name: newPlaylistTitle,
        Songs: [],
        Image: 'Music1.jpg',
        AddToFavorite: 'false',
        Play: 'false',
        Repeat: 'false',
        Category: selectedCategory
      };

      setPlayLists([...playLists, newPlaylist]);
      console.log(newPlaylist);
      setNewPlaylistTitle('');
      console.log(playLists);
      cancel();
    }
  }
  return (
    <>
      <div ref={playlist} className='playlist'>
        <section className='your-playlist'>
          <div className='container'>
            <div className='playlist__wrapper '>
              <div className='playlist__top sectoin-top'>
                <h3 className='playlist__title section-title1'> Featured Albums</h3>
                <h6 className='playlist__title section-titile2'>View More</h6>
              </div>
              <div className='playlist__musics'>
                <div onClick={showEvent} className='playlist__static-playlist'>
                  <MdOutlinePlaylistAdd className='playlist__icon' />
                </div>
                {playLists.map((playlist) => (
                  <PlayList playlists={playlist} />
                ))}
              </div>
              
                <div ref={createPalylist} className='playlist__create-palylist'>
                  <div className='createplaylist__head center'>
                    <h3 className='createplaylist__title'>Create new playlist</h3>
                    <img onClick={cancel} className='remove-image' src={Remove1} />
                  </div>
                  <div className='playlist__content'>
                    <div class='form'>
                      <input type='text' value={newPlaylistTitle}
              onChange={(e) => setNewPlaylistTitle(e.target.value)}
              required  />
                      <label for=''>Title</label>
                    </div>
                    <div className="select">
                    <select
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
>
  <option value="">Select a category</option>
  {categoryList.map((category) => (
    <option key={category.Id} value={category.Name}>
      {category.Name}
    </option>
  ))}
</select>
</div>
                  </div>
                  <div className='playlist__buttons center'>
                    <div onClick={createPlayList} className='playlist__button'>Create</div>
                    <div onClick={cancel} className='playlist__button'>Cancel</div>
                  </div>
                </div>
            
            </div>
          </div>
        </section>
      </div>
       
      
    </>
  );
}