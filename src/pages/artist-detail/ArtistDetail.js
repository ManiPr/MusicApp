import {React,useState} from 'react'
import { useMusicContext } from '../../context/MusicContext';
import {useParams} from 'react-router-dom'
import {ArtistData} from '../../data'
import Option from '../../component/option/Option'
import playbutton from '../../assets/svg/play-album.svg'
import queuebutton from '../../assets/svg/add-to-queu.svg'
import ArtistComponent from '../../component/artist-component/ArtistComponent'
import ArtistMusic from '../../component/artist-music/ArtistMusic'
import './ArtistDetail.css'
export default function ArtistDetail() {
  const { currentMusic,setCurrentMusic, isPlaying, setIsPlaying,audioRef,currentMusicList,setCurrentMusicList } = useMusicContext();

	
	let params=useParams()
	const [artists,setArtists]=useState(ArtistData)
	const artistFind =artists.find(artist=>artist.Id==params.artistId)
  console.log(artists);
  console.log(artistFind);

	const playAll=()=>{
		console.log(artistFind.Songs)
		setCurrentMusicList(artistFind.Songs)
		console.log(currentMusicList)
	}
	

  
  return (
    <>
         <div className='artist-detail'>
            <section className='artist-initiator'>
                <div className='container'>
                    <div className='artist-initiator__wrapper center'>
                        <div className='artist-initiator__right center'>
                        <div className='artist-initiator__image-container'>
                            </div>
                            <div className='artist-initiator__content'>
                                <h4 className='artist-initiator__title'>{artistFind.Name}</h4>
                                <p  className='artist-initiator__artist'>By - {artistFind.Artist}</p>
                                <p className='artist-initiator__stats center'><span className='artist-initiator__song-count'>5 song</span>|<span className='artist-initiator__song-time'>25:10</span></p>
                                <p className='artist-initiator__realese-date'>Released March 23, 2022</p>
                                <div className='artist-initiator__buttons center'>
                                    <div onClick={playAll} className='artist-initiator__button'><span  className='artist-initiator__detail-button'><img src={playbutton} className='artist-initiator__button-icon artist-initiator__button-icon--play'/>Play All</span></div>
                                    <div className='artist-initiator__button'><span className='artist-initiator__detail-button'><img src={queuebutton} className='artist-initiator__button-icon'/>Add To Queue</span></div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='artist-initiator__left'>
						<Option></Option>
                        </div>
                    </div>
                </div>
            </section>
            <section className='ablum-table'>
                <div className='container'>
                    <div className='artist-table__wrapper'>
                
				<div class="artist-table__list ">
					<ul class="artist-table__datas  head-data">
						<li className='artist-table__data ablum-table__data--number'>#</li>
						<li className='artist-table__data ablum-table__data--song-title'>Song Title</li>
						<li className='artist-table__data ablum-table__data--artist'>Artist</li>
						<li className='artist-table__data ablum-table__data--duration'>Duration</li>
						<li className='artist-table__data ablum-table__data--addtofavorite'>Add To Favourites</li>
						<li className='artist-table__data ablum-table__data--more'>More</li>
					</ul>
					{artistFind.Songs.map(artist=>(
						<ArtistMusic artists={artist} ></ArtistMusic>
					))}
				</div>
			</div>
                 
                </div>
            </section>
        </div>
    </>
  )
}
