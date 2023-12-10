import React from 'react'
import './FeaturedPlayList.css'
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
export default function FeaturedPlayList() {
  return (
    <>
        <div className='playlist'>
            <section className='playlist-section'>
                <div className='container'>
                    <div className='palylist__top'>
                        <h3 className='palylist__title'>Top Albums</h3>
                        <div class="slider_cmn_controls center">
                                <div class="slider_cmn_nav"><MdNavigateBefore /></div>
                                <div class="slider_cmn_nav "><MdNavigateNext /></div>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
