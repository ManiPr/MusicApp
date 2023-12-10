import React,{useRef} from 'react'
import img5 from '../../assets/open_logo.png'
import './SideBar.css'
import { MdAlbum } from "react-icons/md";
import { IoAlbumsOutline } from "react-icons/io5";
import { PiHeadphonesLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import { PiArticleNyTimesLight } from "react-icons/pi";
import { PiPlaylistThin } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { CgPlayListAdd } from "react-icons/cg";
import { PiPlaylist } from "react-icons/pi";
import { GiMicrophone } from "react-icons/gi";

export default function SideBar() {
  let menuOpen = false;

  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const clickMenu=()=>{
    if (menuOpen) {
      buttonRef.current.classList.remove("nav__btn--open")
      menuRef.current.classList.remove("nav-menu--open")

      menuOpen = false
  } else {
    buttonRef.current.classList.add("nav__btn--open")
    menuRef.current.classList.add("nav-menu--open")
    menuOpen = true
  }
  }
  return (
    <>
        <div onClick={clickMenu} ref={buttonRef} className='sidebar-button'>
            <span className='sidebar-button__line'></span>
        </div>
        <div ref={menuRef} className='sidebar'>
          <div className='container'>
            <div className='sidebar__wrapper'>
              <div className='sidebar__logos'>
                <div className='sidebar__logo'></div>
                <div className='sidebar__logo open'>
                <a className='sidebar__link '><img src={img5} className='sidebar__logo-image'></img></a>
               
                  </div>
              </div>
              <div className='sidebar__data-wrapper'>
                <ul className='sidebar__datas'>
                  <li className='sidebar__data'><a className='sidebar__link sidebar__link--discover'><span className='sidebar__link-name center'><IoHomeOutline className='icon' />Discover</span></a></li>
                  <li className='sidebar__data'><a className='sidebar__link sidebar__link--album'><span className='sidebar__link-name center'><MdAlbum className='icon'></MdAlbum>Albums</span></a></li>
                  <li className='sidebar__data'><a className='sidebar__link sidebar__link--artist'><span className='sidebar__link-name center'><GiMicrophone className='icon'></GiMicrophone>Artist</span></a></li>
                  <li className='sidebar__data'><a className='sidebar__link sidebar__link--genres'><span className='sidebar__link-name center'><IoAlbumsOutline className='icon'></IoAlbumsOutline>Genres</span></a></li>
                  <li className='sidebar__data'><a className='sidebar__link sidebar__link--track'><span className='sidebar__link-name center'><PiHeadphonesLight className='icon'></PiHeadphonesLight>Tracks</span></a></li>
                </ul>
                <ul className='sidebar__datas'>
                  <li className='sidebar__data'><a className='sidebar__link'><span className='sidebar__link-name center'><GoDownload className='icon'></GoDownload>Downloads</span></a></li>
                  <li className='sidebar__data'><a className='sidebar__link'><span className='sidebar__link-name center'><MdFavoriteBorder className='icon'></MdFavoriteBorder>Favorites</span></a></li>
                  <li className='sidebar__data'><a className='sidebar__link'><span className='sidebar__link-name center'><PiArticleNyTimesLight className='icon'></PiArticleNyTimesLight>History</span></a></li>
                </ul>
                <ul className='sidebar__datas'>
                  <li className='sidebar__data'><a className='sidebar__link'><span className='sidebar__link-name center'><PiPlaylist className='icon'></PiPlaylist>Featured PlayList</span></a></li>
                  <li className='sidebar__data'><a className='sidebar__link'><span className='sidebar__link-name center'><CgPlayListAdd className='icon'></CgPlayListAdd>Create PlayListf</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
