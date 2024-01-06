import React,{useState} from 'react'
import {MdFavorite } from "react-icons/md";
import Option from '../../component/option/Option'
import serarch from '../../assets/svg/table-searcg.svg'
import hide from '../../assets/svg/Hide.svg'
import './PlayListDetail.css'
import Music from '../../component/music/Music'
import {MusicData} from '../../data'
import Table from '../../component/table/Table'
// ببین اگر بخوای با Css Grid بزنی راحت تر نیست لازم شد دوره سی اس اس گرید رو هم نگاه بکن

export default function PlayListDetail() {
    const [musicList,setMusicList]=useState(MusicData)

  return (
    <>
        <div className='playlist-detail'>
            <div className='container'>
                <div className='playlist-detail__wrapper'>
                    <div className='playlist-detail__head'>
                        <div className='playlist-detail__right'>
                            <div className='playlist-detail__image-container'>
                                <img src='' className='playlist-detail__image' />
                            </div>
                            <div className='playlist-detail__content'>
                                <p className='playlist-detail__type'>Create Playlist</p>
                                <h3 className='playlist-detail__title'>Classsic Rock</h3>
                                <p className='playlist-detail__category'>Rock</p>
                                <span className='playlist-detail__data'></span>
                            </div>
                        </div>
                        <div className='playlist-detail__left'>
                            <button className='playlist-detail__play'>Play</button>
                            <div className='playlist-detail__like'><MdFavorite></MdFavorite></div>
                            <div className='playlist-detail__more'><Option></Option></div>
                        </div>
                    </div>
                    <div className='playlist-detail__table-head'>
                        <div className='playlist-detail__left'>
                            <input className='playlist-detail__table-input' />
                            <img src={serarch} />
                        </div>
                        <div className='playlist-detail__right'>
                            <p className='playlist-detail__list-title'>Playlist songs</p>
                            <img className='palylist-detail__list-icon' src={hide} />
                        </div>
                    </div>
                    <div className='playlist-detail__body'>
                    <table>
                  <thead>
                  <tr class="one">
            <th>#</th>
            <th></th>
             <th>Title</th>
             <th>Artist</th>
             <th>Time</th>
             <th></th>
             {/* در این قسمت باید more بزاری یادت نره خیلی کار داره ولی خوبه امروز حد اقل یک خط کد نوشتن فردا اولین کار همین پروژه هست
              */}
        </tr>
                  </thead>
        
        {musicList.map((music)=>
        <tbody>
          <Table musics={music}></Table>
        </tbody>
        )}  
      
        
                 </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
