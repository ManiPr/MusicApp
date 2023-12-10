import React from 'react'
import './Comment.css'
import imga2 from '../../assets/user1.jpg'

export default function Comment({comments}) {
  const currentDate = new Date();
  const daysAgo = (timestamp) => {
    const commentDate = new Date(timestamp);
    const timeDifference = currentDate - commentDate;
  
    // تبدیل میلی‌ثانیه به روز
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    if (days === 0) {
      return 'Today';
    } else if (days === 1) {
      return 'Yesterday';
    } else {
      return `${days} days ago`;
    }
  };
  return (
    <>
    <div className='album-comment__comment center'>
						<div className='album-comment__head center'>
							<div className='album-comment__image-container'>
								<img className='album-comment__image' alt='' src={imga2}></img>
							</div>
							<div className='album-comment__information'>
								<h4 className='album-comment__title'>{comments.name}</h4>
								<p className='album-comment__caption'>{daysAgo(comments.timestamp)}</p>
							</div>
						</div>
						<p className='album-comment__text'>
					{comments.comment}
						</p>
					</div>
    </>
  )
}
