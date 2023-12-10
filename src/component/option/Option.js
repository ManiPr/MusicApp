import React, { useRef, useState } from 'react'
import { AiOutlineDownload,AiOutlineShareAlt } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlinePlaylistAdd,MdFavoriteBorder } from "react-icons/md";
import more from '../../assets/svg/Icon2.svg'

import './Option.css'
export default function Option() {
  const [isOpen, setIsOpen] = useState(false);
  const optionsRef = useRef(null);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='options'>
         <div class="options__more-icon">
                                    <img onClick={toggleOptions} src={more} alt=""/>
                                 </div>
        <ul ref={optionsRef} className={`options__option center ${isOpen ? 'open' : ''}`}>
                <li className='options__list'><a className='options__link center' href="#"><MdFavoriteBorder className='options__icon'></MdFavoriteBorder>Add To Favourites</a></li>
                <li className='options__list'><a className='options__link center' href="#"><IoAddOutline className='options__icon'></IoAddOutline>Add To Queue</a></li>
                <li className='options__list'><a className='options__link center' href="#"><AiOutlineDownload className='options__icon'></AiOutlineDownload>Download Now</a></li>
                <li className='options__list'><a className='options__link center' href="#"><MdOutlinePlaylistAdd className='options__icon'></MdOutlinePlaylistAdd>Add To Playlist</a></li>
                <li className='options__list'><a className='options__link center' href="#"><AiOutlineShareAlt className='options__icon'></AiOutlineShareAlt>Share</a></li>
        </ul>
    </div>
  )
}
