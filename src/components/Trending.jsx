import { useState, useEffect } from "react";
import SliderDown from "./SmallBottomSlider";

export default function Trending(props) {
    const massTrack = props.massTrack
    const massAlbum = props.massAlbum
    const massAlbumTrack0 = props.massAlbumTrack0
    const massAlbumTrack1 = props.massAlbumTrack1
    const massAlbumTrack2 = props.massAlbumTrack2
    const [VisibilityOfExtraTracks, setVisibilityOfExtraTracks] = useState(false)
    
    localStorage.clear()
    useEffect(() => {
        let name = { nameButton: 'trending'}
        props.colorButtons(name.nameButton)
      }, []);
    return (
        <div className='trendingDownSlider'>
            <SliderDown VisibilityOfExtraTracks={VisibilityOfExtraTracks} massTrackIndex={props.massTrack[1]} massTrack={massTrack} massAlbum={massAlbum} massAlbumTrack1={massAlbumTrack1} massAlbumTrack0={massAlbumTrack0}  massAlbumTrack2={massAlbumTrack2}/>
        </div>
    );
  }
  