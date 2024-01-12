import React,{useRef,useState} from 'react'
import img5 from '../../assets/open_logo.png'
import './SideBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHeadphones } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaRecordVinyl } from "react-icons/fa6";
import { IoAlbumsSharp } from "react-icons/io5";
import { IoCloudUploadSharp } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { FaLayerGroup } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { GiLoveSong } from "react-icons/gi";
import { GoMoveToEnd } from "react-icons/go";
import { TbArrowMoveRight } from "react-icons/tb";
import { TbArrowMoveLeft } from "react-icons/tb";
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/Full Logo.png';
import userImage from '../../assets/single_album.jpg'
export default function SideBar() {
  const [menuOpen, setMenuOpen] = useState(true);
   const userRef = useRef(null);
  const sidebarRef = useRef(null);

  const clickMenu = () => {
    setMenuOpen(!menuOpen); 
    
    const sidebarWidth = menuOpen ? '74px' : '250px';
    sidebarRef.current.style.width = sidebarWidth;
    userRef.current.style.width=menuOpen ? '7.3rem' : '25rem'
  };

  return (
    <>
    <div ref={sidebarRef} className='sidebar'>
      <div className='sidebar__button'>
      {menuOpen?<TbArrowMoveLeft onClick={clickMenu} className='sidebar__button-link'></TbArrowMoveLeft>:<TbArrowMoveRight onClick={clickMenu} className='sidebar__button-link'></TbArrowMoveRight>
}

      </div>
        <div className='sidebar__wrapper'>
          <div class="sidebar__logos">
            {menuOpen?<img src={logo2} className='sidebar__logo' />:<img src={logo2} className='sidebar__logo' />}
            </div>
            <ul class="nav-list">
        <li>
          <a href="#">
          <FaHouse className='sidebar__icon'></FaHouse>

            <span class="link-name">Discover</span>
          </a>

      
        </li>

        <li>
          <div class="icon-link">
            <a href="#">
            <FaRecordVinyl className='sidebar__icon'></FaRecordVinyl>
              <span class="link-name">Albums</span>
            </a>
          </div>

        </li>

        <li>
          <div class="icon-link">
            <a href="#">
              <FaHeadphones className='sidebar__icon'></FaHeadphones>
              <span class="link-name">Artist</span>
            </a>
          </div>

        </li>

        <li>
          <a href="#">
            <IoAlbumsSharp className='sidebar__icon'></IoAlbumsSharp>
            <span class="link-name">Genres</span>
          </a>

        </li>

        <li>
          <a href="#">
            <IoCloudUploadSharp className='sidebar__icon'></IoCloudUploadSharp>
            <span class="link-name">Download</span>
          </a>

        </li>

        <li>
          <div class="icon-link">
            <a href="#">
              <IoHeart className='sidebar__icon'></IoHeart>
              <span class="link-name">Favorite</span>
            </a>

          </div>

        
        </li>

        <li>
          <a href="#">
            <FaLayerGroup className='sidebar__icon'></FaLayerGroup>
            <span class="link-name">Playlist</span>
          </a>

       
        </li>

        <li>
          <a href="#">
<GiLoveSong className='sidebar__icon'></GiLoveSong>            
<span class="link-name">Track</span>
          </a>

        
        </li>
        <li>
          <a href="#">
            <IoIosTime className='sidebar__icon'></IoIosTime>
            <span class="link-name">History</span>
          </a>

        
        </li>
       </ul>
        <div ref={userRef} className='sidebar__user center'>
        <div className='sidebar__user-image-container'>
            <img src={userImage} className='sidebar__user-image' />
          </div>
          {menuOpen&&
           <div  className='sidebar__user-information'>
           <h3  className='sidebar__user-name'>Mani</h3>
           <h3  className='sidebar__user-email'>maniweeb@gmail.com</h3>
           </div>
          }
         
         
        </div>
        </div>
      </div>

    </>
  )
}
