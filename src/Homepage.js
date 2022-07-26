import React from "react";
import Header from './components/Header';
import RightControlPanel from './components/ControlPanel';
import SliderUp from './components/SliderUp';
import { Outlet, Link } from 'react-router-dom';

function homepage() {
    return (
      <>
        <div className='container'>
          <Header/>
          <div className='homepage'>
            <RightControlPanel/>
            <div className='homepageUp'>
              <SliderUp/>
              <div className='CenterButtons' >
                <Link style={{ textDecoration: 'none' }} className='button all' to="/">All</Link>
                <Link style={{ textDecoration: 'none', color: "#76CCFB" }} className='button' to="/trending">Trending</Link>
                <Link style={{ textDecoration: 'none', color: "#76CCFB" }} className='button' to="/featured">Featured</Link>
                <Link style={{ textDecoration: 'none', color: "#76CCFB" }} className='button' to="/newreleases">New Releases</Link>
                <Link style={{ textDecoration: 'none', color: "#76CCFB" }} className='button' to="/genres">Genres</Link>
                <Link style={{ textDecoration: 'none', color: "#76CCFB" }} className='button' to="/mostPlayed">Most Played</Link>
              </div>
              <div className='sliderDown'>
                <Outlet />
              </div>
            </div>
            <div className='homepageDown'>
              <div className='ControlMusicPanel'>
                <div className='informationMusic'>
                  <img className='avatar'></img>
                  <div className='MusicName'>NameMusic</div>
                  <div className='avtorNameMusic'>NameAvtor</div>
                </div>
                <div className='controlTrack'>
                  <img></img>
                  <img></img>
                  <img></img>
                  <img></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
               
}

export default homepage;