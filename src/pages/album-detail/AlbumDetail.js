import {React,useState} from 'react'
import './AlbumDetail.css'
import playbutton from '../../assets/svg/play-album.svg'
import queuebutton from '../../assets/svg/add-to-queu.svg'
import setting from '../../assets/svg/setting.svg'
import image from '../../assets/single_album.jpg'
import {useParams} from 'react-router-dom'
import {AlbumData} from '../../data'
import { useMusicContext } from '../../context/MusicContext';
import AlbumMusic from '../../component/album-music/AlbumMusic'
import Option from '../../component/option/Option'
import Comment from '../../component/comment/Comment'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import imga2 from '../../assets/user1.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
export default function AlbumDetail() {
	const { currentMusic,setCurrentMusic, isPlaying, setIsPlaying,audioRef,currentMusicList,setCurrentMusicList } = useMusicContext();

	
	let params=useParams()
	const [albums,setAlbums]=useState(AlbumData)
	const albumFind =albums.find(album=>album.Id==params.albumId)
	const [name, setName] = useState('');
  	const [email, setEmail] = useState('');
  	const [comment, setComment] = useState('');
  	const [comments, setComments] = useState([]);
	console.log(comments.length);
	const playAll=()=>{
		console.log(albumFind.Songs)
		setCurrentMusicList(albumFind.Songs)
		console.log(currentMusicList)
	}
	

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const postComment = () => {
    // Create a new comment object
    const newComment = {
      name,
      email,
      comment,
	  timestamp: new Date(),
    };

    // Add the new comment to the comments array
    setComments([...comments, newComment]);

    // Clear the input fields
    setName('');
    setEmail('');
    setComment('');
  };
  
  return (
    <>
        <div className='album-detail'>
            <section className='album-initiator'>
                <div className='container'>
                    <div className='album-initiator__wrapper center'>
                        <div className='album-initiator__right center'>
                        <div className='album-initiator__image-container'>
                            </div>
                            <div className='album-initiator__content'>
                                <h4 className='album-initiator__title'>{albumFind.Name}</h4>
                                <p  className='album-initiator__artist'>By - {albumFind.Artist}</p>
                                <p className='album-initiator__stats center'><span className='album-initiator__song-count'>5 song</span>|<span className='album-initiator__song-time'>25:10</span></p>
                                <p className='album-initiator__realese-date'>Released March 23, 2022</p>
                                <div className='album-initiator__buttons center'>
                                    <div onClick={playAll} className='album-initiator__button'><span  className='album-initiator__detail-button'><img src={playbutton} className='album-initiator__button-icon album-initiator__button-icon--play'/>Play All</span></div>
                                    <div className='album-initiator__button'><span className='album-initiator__detail-button'><img src={queuebutton} className='album-initiator__button-icon'/>Add To Queue</span></div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='album-initiator__left'>
						<Option></Option>
                        </div>
                    </div>
                </div>
            </section>
            <section className='ablum-table'>
                <div className='container'>
                    <div className='album-table__wrapper'>
                
				<div class="album-table__list ">
					<ul class="album-table__datas  head-data">
						<li className='album-table__data ablum-table__data--number'>#</li>
						<li className='album-table__data ablum-table__data--song-title'>Song Title</li>
						<li className='album-table__data ablum-table__data--artist'>Artist</li>
						<li className='album-table__data ablum-table__data--duration'>Duration</li>
						<li className='album-table__data ablum-table__data--addtofavorite'>Add To Favourites</li>
						<li className='album-table__data ablum-table__data--more'>More</li>
					</ul>
					{albumFind.Songs.map(album=>(
						<AlbumMusic albums={album} ></AlbumMusic>
					))}
				</div>
			</div>
                 
                </div>
            </section>
			<secton className='album-comment'>
				<div className='container'>
					<div className='album-comment__wrapper'>
                <div className='album-comment__top sectoin-top'>
                     <h3 className='album-comment__title section-title1'>Comments(5)</h3>
                </div>
                <div className='album-comment__content  '>
					{comments.length<4?
					(comments.map(comment=>(<Comment comments={comment}></Comment>))):<Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={3}>
					{comments.map((comment) => (<SwiperSlide><Comment comments={comment} /></SwiperSlide>))}</Swiper>}
					 </div>
				</div>
                </div>
        
				
			</secton>
			<secton className='album-leave-commnet'>
				<div className='container'>
					<div className='album-leave-commnet__wrapper'>
                <div className='album-leave-commnet__top sectoin-top'>
                     <h3 className='album-leave-commnet__title section-title1'>Leave A Comment</h3>
                </div>
                <div className='album-leave-commnet__content center'>
						<div className='album-leave-comment__user-infos center'>
							<input placeholder='Enter Your Name' type='text' className='album-leave-comment__user-info --input'value={name} onChange={handleNameChange} />
							<input  placeholder='Enter Your Email' type='text' className='album-leave-comment__user-info --input'value={email}onChange={handleEmailChange} />
						</div>
						<div className='album-leave-comment__comment-infos center'>
							<textarea className='album-leave-comment__comment-infos --input'placeholder='Enter Your Comment'value={comment}onChange={handleCommentChange} />
							<div  onClick={postComment} className='album-leave-comment__comment-button'>Post Comment</div>
						</div>
				</div>

				
                </div>
                </div>
        
				
			</secton>
        </div>
		
    </>
  )
}
