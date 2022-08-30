import { useState, useEffect } from "react";
import SliderDown from "./SmallBottomSlider";

export default function Trending(props) {
    const massTrack = props.massTrack
    const massAlbum = props.massAlbum
    const massAlbumTrack0 = props.massAlbumTrack0
    const maxPositionSlider = -1030
    const [VisibilityOfExtraTracks, setVisibilityOfExtraTracks] = useState(false)
    
    localStorage.clear()
    useEffect(() => {
        let name = { nameButton: 'trending'}
        props.colorButtons(name.nameButton)
      }, []);
    return (
        <div className='trendingDownSlider'>
            <SliderDown maxPositionSlider={maxPositionSlider}VisibilityOfExtraTracks={VisibilityOfExtraTracks} massTrackIndex={props.massTrack[1]} massTrack={massTrack} massAlbum={massAlbum} massAlbumTrack0={massAlbumTrack0}/>
        </div>
    );
  }
  