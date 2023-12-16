import {React,useState } from 'react'
import { useMusicContext } from '../../context/MusicContext';
import {useParams} from 'react-router-dom'
import {ArtistData} from '../../data'
import Option from '../../component/option/Option'
import playbutton from '../../assets/svg/play-album.svg'
import queuebutton from '../../assets/svg/add-to-queu.svg'
import ArtistComponent from '../../component/artist-component/ArtistComponent'
import ArtistMusic from '../../component/artist-music/ArtistMusic'
import './ArtistDetail.css'
import img from '../../assets/z.jpg'
import Table from '../../component/table/Table';
import { MusicData } from '../../data';
// مانی استمرار حتی یک خط کد الکی در ویژال استودیو کد
export default function ArtistDetail() {
  const { currentMusic,setCurrentMusic, isPlaying, setIsPlaying,audioRef,currentMusicList,setCurrentMusicList } = useMusicContext();
    let params=useParams()
	const [artists,setArtists]=useState(ArtistData)
	const artistFind =artists.find(artist=>artist.Id==params.artistId)

	const playAll=()=>{
		setCurrentMusicList(artistFind.Songs)
	}
    
    return (
    <>
         <div className='artist-detail'>
            <section className='artist-initiator'>
                <div className='container'>
                    <div className='artist-initiator__wrapper center'>
                        <div className='artist-initiator__right center'>
                        <div className='artist-initiator__image-container'>
                        <img src={img} className='artist-initiator__image'/>
                            </div>
                            <div className='artist-initiator__content'>
                                <h4 className='artist-initiator__title'>{artistFind.Name}</h4>
                                <p  className='artist-initiator__caption'>one  of the greatest artist in the world just for fun she is fucking artist</p>
                                <div className='artist-initiator__buttons center'>
                                    <div onClick={playAll} className='artist-initiator__button'><span  className='artist-initiator__detail-button'><img src={playbutton} className='artist-initiator__button-icon artist-initiator__button-icon--play'/>Play All</span></div>
                                    <div className='artist-initiator__button'><span className='artist-initiator__detail-button'><img src={queuebutton} className='artist-initiator__button-icon'/>Add To Queue</span></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <div className='download'>
        <section className='ablum-table'>
                <div className='container'>
                <div className='album-table__wrapper'>
           
                 <table>
        <tr class="one">
            <th>#</th>
             <th>Song Title</th>
             <th>Artist</th>
             <th>Duration</th>
             <th>Add To Favorite</th>
             <td>more</td>
        </tr>
        {MusicData.map((music)=>
                <Table musics={music}></Table>
        )}  
      
        
                 </table>
			    </div>
                 
                </div>
            </section>
        </div>
        </div>
     
    </>
  )
}
