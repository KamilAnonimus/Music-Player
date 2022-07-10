import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import RightControlPanel from './controlPanel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <Header/>
      <div className='homepage'>
        <RightControlPanel/>
        <div className='homepageUp'>
          <div className='sliderUp'>

          </div>
          <div className='CenterButtons'>
            <div className='button all'>All</div>
            <div className='button'>Trending</div>
            <div className='button'>Featured</div>
            <div className='button'>New Releases</div>
            <div className='button'>Genres</div>
            <div className='button'>Most Played</div>
          </div>
          <div className='sliderDown'>

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
  </React.StrictMode>
);