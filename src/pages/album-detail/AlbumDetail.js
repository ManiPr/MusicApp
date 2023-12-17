import {React,useState } from 'react'
import './AlbumDetail.css'
import playbutton from '../../assets/svg/play-album.svg'
import queuebutton from '../../assets/svg/add-to-queu.svg'
import {useParams} from 'react-router-dom'
import {AlbumData} from '../../data'
import { useMusicContext } from '../../context/MusicContext';
import Comment from '../../component/comment/Comment'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import img from '../../assets/z.jpg'
import Table from '../../component/table/Table';
import { MusicData } from '../../data';
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
        <div className='artist-detail'>
            <section className='artist-initiator'>
                <div className='container'>
                    <div className='artist-initiator__wrapper center'>
                        <div className='artist-initiator__right center'>
                        <div className='artist-initiator__image-container'>
                        <img src={img} className='artist-initiator__image'/>
                            </div>
                            <div className='artist-initiator__content'>
                                <h4 className='artist-initiator__title'>{albumFind.Name}</h4>
                                <p  className='artist-initiator__caption'>By-{albumFind.Artist}</p>
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
			<secton className='album-comment'>
				<div className='container'>
					<div className='album-comment__wrapper'>
                <div className='album-comment__top sectoin-top'>
                     <h3 className='album-comment__title section-title1'>Comments(5)</h3>
                </div>
                <div className='album-comment__content  section-data center'>
          {Array.isArray(comments) && comments.length === 0 ? <p>No Comments Have Been Written</p> : 
  comments.length < 5 ? (
    comments.map(comment => (
      <Comment comments={comment} />
    ))
  ) : (
    <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={4}>
      {comments.map(comment => (
        <SwiperSlide key={comment.Id}>
          <Comment comments={comment} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
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
		
    </>
  )
}
