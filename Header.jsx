import React from "react";
import './style/homepage.scss';
import icon from './images/icon.png';
import logo from './images/logo.png';
import timehistory from './images/time-history.png';
import bell from './images/bell.png';
import star from './images/star.png';
import list from './images/player-list-play.png';
import searchicon from './images/search.png';

function Header() {
  return (
    <div className="header">
      <div className="Sign">
        <img className='icon' src={icon}/>
        <div className="sign">Sign in/Sign up</div>
      </div>
      <div className="search">
        <img className="logo" src={logo}/>
        <input></input>
        <img className="searchIcon" src={searchicon}/>
      </div>
      <div className="buttonHeader">
        <img src={timehistory}/>
        <img src={bell}/>
        <img src={star}/>
        <img src={list}/>
      </div>
    </div>
  );
}

export default Header;
