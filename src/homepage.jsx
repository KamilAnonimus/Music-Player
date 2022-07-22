import React from "react";
import Header from './components/header';
import RightControlPanel from './components/controlPanel';
import SliderUp from './components/sliderUp';
import SliderDown from './components/smallBottomSlider';
import {Route, Routes } from 'react-router-dom';
import albumsPage from "./components/albums.jsx";

function homepage() {
    return (
      <>
        <div className='container'>
          <Header/>
          <div className='homepage'>
            <RightControlPanel/>
            <div className='homepageUp'>
              <SliderUp/>
              <div className='CenterButtons'>
                <a classsName='button all' href="/albums">All</a>
                <div className='button'>Trending</div>
                <div className='button'>Featured</div>
                <div className='button'>New Releases</div>
                <div className='button'>Genres</div>
                <div className='button'>Most Played</div>
              </div>
                <SliderDown/>
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
          <Routes>
            <Route exact path="/albums" component={albumsPage} />
          </Routes>
          </>
    );
               
}

export default homepage;