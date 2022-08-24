import React from "react";
import Header from './components/Header';
import RightControlPanel from './components/ControlPanel';
import SliderUp from './components/SliderUp';
import { Outlet, Link } from 'react-router-dom';

function Homepage(props) {
  let nameButton = ''
  if (props.nameButton == undefined) {} else {
    nameButton = props.nameButton.name
    colorButton(nameButton)
  }
  function colorButton() {
    if (!localStorage.getItem('controllMusicTrack')) {
      if(nameButton === 'all') {document.getElementById('all').style.color = '#FFFFFF'} else {document.getElementById('all').style.color = '#76CCFB'}
      if(nameButton === 'trending') {document.getElementById('trending').style.color = '#FFFFFF'} else {document.getElementById('trending').style.color = '#76CCFB'}
      if(nameButton === 'featured') {document.getElementById('featured').style.color = '#FFFFFF'} else {document.getElementById('featured').style.color = '#76CCFB'}
      if(nameButton === 'newreleases') {document.getElementById('newreleases').style.color = '#FFFFFF'} else {document.getElementById('newreleases').style.color = '#76CCFB'}
      if(nameButton === 'genres') {document.getElementById('genres').style.color = '#FFFFFF'} else {document.getElementById('genres').style.color = '#76CCFB'}
      if(nameButton === 'mostPlayed') {document.getElementById('mostPlayed').style.color = '#FFFFFF'} else {document.getElementById('mostPlayed').style.color = '#76CCFB'}
    }
  }
    return (
      <>
        <div className='container'>
          <Header/>
          <div className='homepage'>
            <RightControlPanel/>
            <div className='homepageUp'>
              <SliderUp/>
              <div className='CenterButtons' >
                <Link style={{ textDecoration: 'none', color: "#76CCFB" }} className='buttons' id={'all'} to="/"  onClick={() => {nameButton = 'all'; colorButton()}}>All</Link>
                <Link style={{ textDecoration: 'none', color: "#76CCFB" }} className='buttons' id={'trending'} to="/trending" onClick={() => {nameButton = 'trending'; colorButton()}}>Trending</Link>
                <Link style={{ textDecoration: 'none', color: "#76CCFB" }} className='buttons' id={'featured'} to="/featured" onClick={() => {nameButton = 'featured'; colorButton()}}>Featured</Link>
                <Link style={{ textDecoration: 'none', color: "#76CCFB" }} className='buttons' id={'newreleases'} to="/newreleases" onClick={() => {nameButton = 'newreleases'; colorButton()}}>New Releases</Link>
                <Link style={{ textDecoration: 'none', color: "#76CCFB" }} className='buttons' id={'genres'} to="/genres" onClick={() => {nameButton = 'genres'; colorButton()}}>Genres</Link>
                <Link style={{ textDecoration: 'none', color: "#76CCFB" }} className='buttons' id={'mostPlayed'} to="/mostPlayed" onClick={() => {nameButton = 'mostPlayed'; colorButton()}}>Most Played</Link>
              </div>
              <div className='sliderDown'>
                <Outlet/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
               
}

export default Homepage;